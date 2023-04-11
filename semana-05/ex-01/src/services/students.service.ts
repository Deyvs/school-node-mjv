import { Student } from "../models/student.model";
import StudentRepository from "../repositories/student.repository";

class StudentsService {
  // students: Array<Student> = [
  //   {
  //     name: "Nathan Carlos",
  //     email: "nathan@email.com",
  //     document: "11146431066",
  //     password: "543345",
  //     age: 28,
  //   },
  //   {
  //     name: "Rodrigo Mantuan",
  //     email: "rodrigo@email.com",
  //     document: "41632022001",
  //     password: "543345",
  //     age: 25,
  //   },
  //   {
  //     name: "Nathália Castro",
  //     email: "nathalia@email.com",
  //     document: "86444493030",
  //     password: "543345",
  //     age: 23,
  //   },
  //   {
  //     name: "Gabriella Monet",
  //     email: "nathan@email.com",
  //     document: "16107784055",
  //     password: "543345",
  //     age: 28,
  //   },
  // ];

  getAll() {
    return StudentRepository.getAll();
  }

  getByDocument(document: string) {
    return StudentRepository.getByDocument(document);
  }

  create(student: typeof Student) {
    return StudentRepository.create(student);
  }

  deleteStudent(document: string) {
    return StudentRepository.delete(document);
  }

  updateStudent(document: string, student: Partial<typeof Student>) {
    return StudentRepository.update(document, student);
  }
}

export default new StudentsService();
