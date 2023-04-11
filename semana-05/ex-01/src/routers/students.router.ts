import { Request, Response, Router } from "express";
import StudentsService from "../services/students.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const students = await StudentsService.getAll();
  res.status(200).send({
    status: 200,
    length: students.length,
    data: students,
  });
});

router.get("/:document", async (req: Request, res: Response) => {
  const student = await StudentsService.getByDocument(req.params.document);

  if (!student) {
    return res.status(400).json({
      message: "Student not found!",
    });
  }
  res.status(200).json({
    status: "success",
    data: student,
  });
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newStudent = await StudentsService.create(req.body);
    res.status(201).json({
      status: "201",
      message: "Student create",
      data: {
        newStudent,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.delete("/:document", async (req: Request, res: Response) => {
  try {
    await StudentsService.deleteStudent(req.params.document);

    res.status(200).json({
      status: 200,
      message: null,
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.put("/:document", async (req: Request, res: Response) => {
  try {
    const { document } = req.params;
    const { body } = req;
    await StudentsService.updateStudent(document, body);
    const studentUpdated = await StudentsService.getByDocument(
      req.params.document
    );
    res.status(200).json({
      status: "200",
      data: {
        message: studentUpdated,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

export default router;
