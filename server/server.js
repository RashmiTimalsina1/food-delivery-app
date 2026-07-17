import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/images", express.static("uploads"));

// Food API Routes
app.use("/api/food", foodRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});