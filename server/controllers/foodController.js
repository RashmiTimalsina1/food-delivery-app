import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add Food Item
const addFood = async (req, res) => {
  try {
    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();

    res.json({
      success: true,
      message: "Food Added Successfully",
    });

  } catch (error) {
    console.log(error);

    // Delete uploaded image if database save fails
    if (req.file) {
      fs.unlink(`uploads/${req.file.filename}`, () => {});
    }

    res.json({
      success: false,
      message: "Error adding food",
    });
  }
};

// List All Food Items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});

    res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: "Error fetching food list",
    });
  }
};

// Remove Food Item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    // Delete image from uploads folder
    fs.unlink(`uploads/${food.image}`, () => {});

    // Delete food from database
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Food Removed",
    });

  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: "Error",
    });
  }
};

export { addFood, listFood, removeFood };