import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, username, email, password, role } = body;

    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { error: "Nama, username, email, dan password wajib diisi." },
        { status: 400 }
      );
    }

    const userRole = role && ["admin", "editor"].includes(role) ? role : "editor";

    // Check existing username or email
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Username atau email sudah terdaftar." },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        role: userRole,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      { message: "Registrasi berhasil.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server saat registrasi." },
      { status: 500 }
    );
  }
}
