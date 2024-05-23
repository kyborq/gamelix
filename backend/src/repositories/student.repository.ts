import Student from '../models/student.model';

export async function findStudent(name: string) {
  const student = await Student.findOne({ name });
  return student;
}

export async function findAllStudents() {
  const students = await Student.find();
  return students;
}

export async function createStudent(name: string) {
  const existedStudent = await findStudent(name);

  if (existedStudent) {
    return null;
  }

  const student = new Student({ name });
  const savedStudent = await student.save();

  return savedStudent;
}
