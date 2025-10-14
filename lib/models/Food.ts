import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema({
  name: String,
  ingredients: String,
  price: Number,
  image: String,
});

export const Food =
  mongoose.models.Food ||
  mongoose.model<Schema>("Food", FoodSchema);