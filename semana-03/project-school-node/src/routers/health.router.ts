import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const health = { message: "Application working successfully!" };
  res.status(200).send(health);
});

router.get("/check", (req: Request, res: Response) => {
  const healthCheck = { message: "Application is in good health!" };
  res.status(200).send(healthCheck);
});

export default router;
