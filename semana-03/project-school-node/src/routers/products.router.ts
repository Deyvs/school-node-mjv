import { Request, Response, Router } from "express";
import { products } from "../service/products";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    status: "success",
    length: products.length,
    data: products,
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const product = products.find((prod) => prod.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({
      message: "Product not found!",
    });
  }
  res.status(200).json({
    status: "success",
    length: products.length,
    data: product,
  });
});

router.post("/", (req: Request, res: Response) => {
  const validateFields = ["description", "img", "price", "quantity"];
  let hasTrue = true;
  for (let field of validateFields) {
    console.log(validateFields.includes(field));
    if (!Object.keys(req.body).includes(field)) {
      hasTrue = false;
    }
  }

  if (req.body.hasOwnProperty() || !hasTrue) {
    return res.status(400).json({
      message: "Insert a valid body!",
    });
  }

  const { quantity } = req.body;
  if (quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be great than zero!",
    });
  }

  const newproduct = { id: products.length + 1, ...req.body };
  products.push(newproduct);
  res.status(201).json({
    status: "success",
    data: newproduct,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  const productIndex = products.findIndex(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found!",
    });
  }

  products.splice(productIndex, 1);

  res.status(204).json({
    status: "success",
    message: null,
  });
});

router.put("/:id", (req: Request, res: Response) => {
  const productIndex = products.findIndex(
    (prod) => prod.id === parseInt(req.params.id)
  );

  if (productIndex === -1) {
    return res.status(400).json({
      message: "Product not found!",
    });
  }

  const validateFields = ["description", "img", "price", "quantity"];
  let hasTrue = true;
  for (let field of validateFields) {
    if (!Object.keys(req.body).includes(field)) {
      hasTrue = false;
    }
  }

  if (req.body.hasOwnProperty() || !hasTrue) {
    return res.status(400).json({
      message: "Insert a valid body!",
    });
  }

  const { quantity } = req.body;
  if (quantity <= 0) {
    return res.status(400).json({
      message: "Quantity must be great than zero!",
    });
  }

  products[productIndex] = { id: productIndex + 1, ...req.body };
  const productUpdated = products[productIndex];

  res.status(200).json({
    status: "updated",
    data: productUpdated,
  });
});

export default router;
