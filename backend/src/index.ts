import { Hono } from "hono";
import mongoose from "mongoose";

import auth from "./controllers/auth.controller";
import students from "./controllers/student.controller";

mongoose.connect("mongodb://localhost:27017/school");

const app = new Hono();

app.route("/students", students);
app.route("/auth", auth);

export default app;
