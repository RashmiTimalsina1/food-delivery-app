import mongoose from "mongoose";
import dotenv from "dotenv";
import foodModel from "./models/foodModel.js";
import { foodData } from "./data/foodData.js";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await foodModel.deleteMany({});
    console.log("Old food data deleted");

    await foodModel.insertMany(foodData);
    console.log("Food data inserted successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();