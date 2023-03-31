import { Student } from "../models/student.model";

class StudentsService {
  students: Array<Student> = [
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

  getAll() {
    return this.students;
  }

  getByDocument(document: string) {
    const student = this.students.find((std) => std.document === document);

    return student;
  }

  create(student: Student) {
    const newStudent = student;
    this.students.push(newStudent);
    return newStudent;
  }

  deleteStudent(document: string) {
    const studentIndex = this.students.findIndex(
      (student) => student.document === document
    );

    if (studentIndex === -1) {
      throw new Error("Student not found!");
    }

    this.students.splice(studentIndex, 1);
  }

  updateStudent(document: string, stdUpdate: any) {
    const studentIndex = this.students.findIndex(
      (student) => student.document === document
    );

    if (studentIndex === -1) {
      throw new Error("Student not found!");
    }

    this.students[studentIndex] = {
      ...this.students[studentIndex],
      ...stdUpdate,
    };
    return this.students[studentIndex];
  }
}

export default new StudentsService();
