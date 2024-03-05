import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { products } from "./data/products.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is runing");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
