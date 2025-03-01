import "tsconfig-paths/register";
import express, { Router } from "express";
import productsRoutes from "@routes/products";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productsRoutes);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
