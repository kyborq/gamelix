import { compare } from "bcrypt";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { sign } from "jsonwebtoken";

import {
  createAuth,
  findAuth,
  saveToken,
} from "../repositories/auth.repository";

type Credentials = {
  login: string;
  password: string;
};

function createToken(id: string) {
  return sign({ id }, "process.env.JWT_SECRET", { expiresIn: "1h" });
}

function createRefreshToken(id: string) {
  return sign({ id }, "process.env.JWT_REFRESH_SECRET", { expiresIn: "7d" });
}

const app = new Hono();

app.post("/register", async (c) => {
  const { login, password } = await c.req.json<Credentials>();

  const auth = await createAuth(login, password);
  if (!auth) {
    throw new HTTPException(403, { message: "Error..." });
  }

  return c.json(auth);
});

app.post("/login", async (c) => {
  const { login, password } = await c.req.json<Credentials>();

  const auth = await findAuth(login);
  if (!auth) {
    throw new HTTPException(401, { message: "Are you even real?" });
  }

  const isMatch = await compare(password, auth.password);
  if (!isMatch) {
    throw new HTTPException(401, { message: "Hehe..." });
  }

  const token = createToken(auth.id);
  const refreshToken = createRefreshToken(auth.id);

  await saveToken(auth.id, refreshToken);
  return c.json({ token, refreshToken });
});

app.post("/refresh", async (c) => {});

export default app;
