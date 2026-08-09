import { SignJWT, jwtVerify } from "jose";

export interface JWTPayload {
  id: number;
  username: string;
  role: string;
}

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET || "lendang-belo-secret-key-development-2026";
  return new TextEncoder().encode(secret);
};

/**
 * Sign a JWT token containing user id, username, and role with 7-day expiration.
 */
export async function signToken(payload: JWTPayload): Promise<string> {
  return await new SignJWT({
    id: payload.id,
    username: payload.username,
    role: payload.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecretKey());
}

/**
 * Verify and decode a JWT token. Returns null if invalid or expired.
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return {
      id: payload.id as number,
      username: payload.username as string,
      role: payload.role as string,
    };
  } catch {
    return null;
  }
}
