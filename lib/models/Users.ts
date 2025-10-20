import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phoneNumber: { type: String },
  role: { type: String, required: true, enum: ["USER", "ADMIN"] },
});

export const User =
  mongoose.models.User || mongoose.model<Schema>("User", UserSchema);
