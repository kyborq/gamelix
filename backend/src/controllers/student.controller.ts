import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  createStudent,
  findAllStudents,
} from "../repositories/student.repository";

const app = new Hono();

app.get(async (c) => {
  const students = await findAllStudents();
  return c.json(students);
});

app.post(async (c) => {
  const studentData = await c.req.json();
  const student = await createStudent(studentData.name);

  if (!student) {
    throw new HTTPException(403, { message: "Student already exist" });
  }

  return c.json(student);
});

export default app;
