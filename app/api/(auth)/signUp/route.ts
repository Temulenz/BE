// app/api/users/route.ts
import { createUser } from "@/lib/services/user-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await createUser(email);
  return NextResponse.json({ message: "Success" });
}
