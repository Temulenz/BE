import { Category } from "../models/Category";
import connectDB from "../mongodb";

export const createCategory = async (name: string) => {
  await connectDB();
  const newCategory = new Category({ name });
  await newCategory.save();
  return newCategory;
};

export const deleteCategoryById = async (id: string) => {
  await connectDB();
  return await Category.findByIdAndDelete(id);
};

export const getAllCategories = async () => {
  await connectDB();
  return await Category.find();
};
