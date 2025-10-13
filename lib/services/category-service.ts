import { Category, Dishes } from "../models/Category";
import connectDB from "../mongodb";

export const createCategory = async (name: string) => {
  await connectDB();
  const newCategory = new Category({ name });
  await newCategory.save();
  return newCategory;
};

export const getAllCategories = async () => {
  await connectDB();
  return await Category.find();
};
export const Dishesinfo = async (form: any) => {
  await connectDB();
  const Newdishes = new Dishes({ form });
  await Newdishes.save();
  return Newdishes;
};
