import { Request, Response, Router } from "express";
import StudentsService from "../services/students.service";

const router = Router();

const students = [
  {
    name: "Nathan Carlos",
    email: "nathan@email.com",
    document: "11146431066",
    password: "543345",
    age: 28,
  },
  {
    name: "Rodrigo Mantuan",
    email: "rodrigo@email.com",
    document: "41632022001",
    password: "543345",
    age: 25,
  },
  {
    name: "Nathália Castro",
    email: "nathalia@email.com",
    document: "86444493030",
    password: "543345",
    age: 23,
  },
  {
    name: "Gabriella Monet",
    email: "nathan@email.com",
    document: "16107784055",
    password: "543345",
    age: 28,
  },
];

router.get("/", (req: Request, res: Response) => {
  const students = StudentsService.getAll();
  res.status(200).send({
    status: 200,
    length: students.length,
    data: students,
  });
});

router.get("/:document", (req: Request, res: Response) => {
  const student = StudentsService.getByDocument(req.params.document);

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

router.post("/", (req: Request, res: Response) => {
  const newStudent = StudentsService.create(req.body);
  res.status(201).json({
    status: "201",
    message: "Student create",
    data: {
      newStudent,
    },
  });
});

router.delete("/:document", (req: Request, res: Response) => {
  try {
    StudentsService.deleteStudent(req.params.document);

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

router.put("/:document", (req: Request, res: Response) => {
  try {
    const { document } = req.params;
    const { body } = req;
    const studentUpdated = StudentsService.updateStudent(document, body);

    res.status(200).json({
      status: "updated",
      data: studentUpdated,
    });
  } catch (err: any) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

export default router;
