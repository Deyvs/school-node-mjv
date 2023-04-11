import { Request, Response, Router } from "express";
import ProductService from "../service/products.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await ProductService.getAll();

  res.status(200).send({
    status: "success",
    length: products.length,
    data: products,
  });
});

router.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const product = await ProductService.getById(id);
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

router.post("/", async (req: Request, res: Response) => {
  try {
    const newproduct = await ProductService.createProduct(req.body);
    res.status(201).json({
      status: "created",
      data: newproduct,
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await ProductService.deleteProduct(id);

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

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const productToUpdate = await ProductService.updateProduct(id, req.body);
    const productUpdated = await ProductService.getById(id);

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
