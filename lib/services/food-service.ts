import {Food} from "../models/Food"
import connectDB from "../mongodb";
type food ={
  name:string,
  price:number,
  ingredients:string
  image:string
}

export const createFood = async (foodData:food) => {
  await connectDB();
  const newFood = new Food(foodData);
  await newFood.save();
  return newFood;
};

export const getAllFoods = async () => {
  await connectDB();
  return await Food.find();
};