import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema({
  name: String,
  price: { type: Number, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  ingredients: String,
  imageUrl: String,
});

export const Food =
  mongoose.models.Food || mongoose.model<Schema>("Food", FoodSchema);
