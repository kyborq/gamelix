import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import { createPlayer } from "../repositories/player.repository";

type CreatePlayer = {
  playerName: string;
};

const app = new Hono();

app.post(async (c) => {
  const { playerName } = await c.req.json<CreatePlayer>();

  const player = await createPlayer("664f1b84360e80490cc64d95", playerName);
  if (!player) {
    throw new HTTPException(403, { message: "Game name has to be unique" });
  }

  return c.json(player);
});

export default app;
