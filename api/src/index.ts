import "tsconfig-paths/register";
import express, { json, urlencoded } from "express";
import productsRoutes from "@routes/products";

const port = 3000;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productsRoutes);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
