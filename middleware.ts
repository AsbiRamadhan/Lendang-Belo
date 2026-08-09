import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET || "lendang-belo-secret-key-development-2026";
  return new TextEncoder().encode(secret);
};

const protectedPaths = ["/admin", "/dashboard", "/blog/create", "/blog/edit"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bypass public auth login page unless user is already authenticated
  if (pathname === "/admin/login") {
    const token = request.cookies.get("auth_token")?.value;
    if (token) {
      try {
        await jwtVerify(token, getJwtSecretKey());
        return NextResponse.redirect(new URL("/admin", request.url));
      } catch {
        // Invalid token, allow access to login
      }
    }
    return NextResponse.next();
  }

  // Check if route is protected
  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isProtected) {
    const token = request.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      await jwtVerify(token, getJwtSecretKey());
      return NextResponse.next();
    } catch {
      // Clear invalid cookie and redirect to login page
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("auth_token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/blog/create/:path*",
    "/blog/edit/:path*",
  ],
};
