// app/api/users/route.ts

import { createUser } from "@/lib/services/user-service";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Email alga" }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await createUser(email, hashPassword);

    return NextResponse.json(
      { message: "amjilttai burtegdlee" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
