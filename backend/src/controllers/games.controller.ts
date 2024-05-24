import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  createGame,
  findAllGames,
  findGame,
} from "../repositories/game.repository";

type CreateGame = {
  name: string;
};

const app = new Hono();

app.get(async (c) => {
  const games = await findAllGames();
  return c.json({
    status: 200,
    content: games,
  });
});

app.get(":game", async (c) => {
  const gameName = c.req.param("game");
  const game = await findGame(gameName);
  return c.json(game);
});

app.post(async (c) => {
  const { name } = await c.req.json<CreateGame>();

  const game = await createGame(name);
  if (!game) {
    throw new HTTPException(403, { message: "Game name has to be unique" });
  }

  return c.json(game);
});

export default app;
