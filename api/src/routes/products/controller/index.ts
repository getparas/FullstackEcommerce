import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("list products");
}
export function getProductById(req: Request, res: Response) {
  res.send("get product by id");
}
export function createProduct(req: Request, res: Response) {
  res.send("create product");
}
export function updateProduct(req: Request, res: Response) {
  res.send("update product");
}
export function deleteProduct(req: Request, res: Response) {
  res.send("delete product");
}
