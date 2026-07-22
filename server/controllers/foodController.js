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

export { addFood };