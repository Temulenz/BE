import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/lib/mongodb";
import { User } from "@/lib/models/Users";

export const createUser = async (email: string, hashPassword: string) => {
  await connectDB();

  const newUser = new User({
    email,
    password: hashPassword,
    role: "USER",
  });

  await newUser.save();
  return newUser;
};
