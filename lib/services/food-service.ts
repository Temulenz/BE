import { Category } from "../models/Category";
import { Food } from "../models/Food";
import connectDB from "../mongodb";
import { FoodType } from "../utils/type";

export const getAllFoods = async (): Promise<FoodType[]> => {
  await connectDB();
  Category;
  const allFoods: FoodType[] = await Food.find({}).populate("categoryId");
  return allFoods;
};

export const createFood = async (
  name: string,
  ingredients: string,
  price: number,
  categoryId: string,
  imageUrl: string
) => {
  await connectDB();
  const newFood = new Food({
    name,
    ingredients,
    price,
    categoryId,
    imageUrl,
  });
  await newFood.save();
  return true;
};

export const deleteFoodById = async (id: string) => {
  await connectDB();
  return await Food.findByIdAndDelete(id);
};
