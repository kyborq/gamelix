import { Hono } from "hono";
import { cors } from "hono/cors";
import mongoose from "mongoose";

import games from "./controllers/games.controller";
import players from "./controllers/players.controller";

mongoose.connect("mongodb://localhost:27017/school");

const app = new Hono();

app.use(cors());
app.route("/games", games);
app.route("/players", players);

export default app;
