import { NextResponse } from "next/server";
import { removeAuthCookie } from "@/lib/auth";

export async function POST() {
  try {
    await removeAuthCookie();
    return NextResponse.json({ message: "Logout berhasil." });
  } catch (error) {
    console.error("Logout Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server saat logout." },
      { status: 500 }
    );
  }
}
