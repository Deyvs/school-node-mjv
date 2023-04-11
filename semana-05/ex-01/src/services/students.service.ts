import { Student } from "../models/student.model";
import StudentRepository from "../repositories/student.repository";

class StudentsService {
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
