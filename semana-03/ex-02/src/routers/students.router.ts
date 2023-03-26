import { Request, Response, Router } from "express";

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
  res.status(200).send({
    status: "success",
    length: students.length,
    data: students,
  });
});

router.get("/:document", (req: Request, res: Response) => {
  const student = students.find((std) => std.document === req.params.document);
  if (!student) {
    return res.status(400).json({
      message: "Student not found!",
    });
  }
  res.status(200).json({
    status: "success",
    length: students.length,
    data: student,
  });
});

router.post("/", (req: Request, res: Response) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json({
    status: "success",
    data: newStudent,
  });
});

router.delete("/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (std) => std.document === req.params.document
  );

  if (studentIndex === -1) {
    return res.status(400).json({
      message: "Student not found!",
    });
  }

  students.splice(studentIndex, 1);

  res.status(204).json({
    status: "success",
    message: null,
  });
});

router.put("/:document", (req: Request, res: Response) => {
  const studentIndex = students.findIndex(
    (std) => std.document === req.params.document
  );
  if (studentIndex === -1) {
    return res.status(400).json({
      message: "Student not found! Inser a document valid!",
    });
  }
  students[studentIndex] = req.body;
  const studentUpdated = students[studentIndex];

  res.status(200).json({
    status: "updated",
    data: studentUpdated,
  });
});

export default router;
