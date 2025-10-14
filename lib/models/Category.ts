import mongoose, { Schema } from "mongoose";



const CategorySchema = new Schema({
  name: String,
});


export const Category =
  mongoose.models.Category ||
  mongoose.model<Schema>("Category", CategorySchema);

