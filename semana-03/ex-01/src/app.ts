import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Helo, World!",
  });
});

app.use(router);

app.listen(port, () => console.log(`Server running on port: ${port}`));
