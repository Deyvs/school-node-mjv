import { Product } from "./../model/products.model";
import { Request, Response, Router } from "express";
import ProductsService from "../service/products.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const products = ProductsService.getAllProducts();
  res.status(200).send({
    status: "success",
    length: products.length,
    data: products,
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const product = ProductsService.getById(id);
  if (!product) {
    return res.status(404).json({
      message: "Product not found!",
    });
  }
  res.status(200).json({
    status: 200,
    data: product,
  });
});

router.post("/", (req: Request, res: Response) => {
  const newproduct = ProductsService.createProduct(req.body);
  res.status(201).json({
    status: "created",
    data: newproduct,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const productIndex = ProductsService.deleteProduct(id);

    res.status(200).json({
      status: "deleted",
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const productUpdated = ProductsService.updateProduct(id, req.body);

    res.status(200).json({
      status: "updated",
      data: productUpdated,
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

export default router;
