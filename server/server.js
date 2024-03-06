import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is runing");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
