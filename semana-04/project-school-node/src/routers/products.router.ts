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
  // const products = ProductsService.getAllProducts();
  // const product = { id: products.length + 1, ...req.body };
  const newproduct = ProductsService.createProduct(req.body);
  res.status(201).json({
    status: "created",
    data: newproduct,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const productIndex = ProductsService.deleteProduct(id);

  // if (productIndex === -1) {
  //   return res.status(404).json({
  //     message: "Product not found!",
  //   });
  // }

  // products.splice(productIndex, 1);

  res.status(200).json({
    status: "deleted",
  });
});

router.put("/:id", (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  // const productIndex = products.findIndex(
  //   (prod) => prod.id === parseInt(req.params.id)
  // );

  // if (productIndex === -1) {
  //   return res.status(400).json({
  //     message: "Product not found!",
  //   });
  // }

  // const { quantity } = req.body;
  // if (quantity <= 0) {
  //   return res.status(400).json({
  //     message: "Quantity must be great than zero!",
  //   });
  // }

  // products[productIndex] = { ...products[productIndex], ...req.body };
  // const productUpdated = products[productIndex];
  const productUpdated = ProductsService.updateProduct(id, req.body);

  res.status(200).json({
    status: "updated",
    data: productUpdated,
  });
});

export default router;
