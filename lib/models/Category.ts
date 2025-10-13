import mongoose, { Schema } from "mongoose";

type CategorySchemaType = {
  name: string;
};

const CategorySchema = new Schema({
  name: String,
});
const FormSchema = new Schema({
  name: String,
  ingrediets: String,
  price: Number,
  image: String,
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<CategorySchemaType>("Category", CategorySchema);
export const Dishes =
  mongoose.models.Dishes ||
  mongoose.model<CategorySchemaType>("Dishes", FormSchema);
