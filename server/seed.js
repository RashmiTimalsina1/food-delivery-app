import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./config/db.js";
import foodModel from "./models/foodModel.js";
import { foodData } from "./data/foodData.js";

const seedData = async () => {
  try {
    await connectDB();

    await foodModel.deleteMany({});
    console.log("Old food data deleted");

    await foodModel.insertMany(foodData);
    console.log("Food data inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();