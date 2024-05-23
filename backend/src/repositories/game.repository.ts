import { v4 as uuidv4 } from "uuid";

import Game from "../models/game.model";

export async function findGame(name: string) {
  const game = await Game.findOne({ name });
  return game;
}

export async function findAllGames() {
  const games = await Game.find();
  return games;
}

export async function createGameToken(id: string) {
  const token = uuidv4();
  const game = await Game.findByIdAndUpdate(
    id,
    { token: token },
    { new: true }
  );

  return game;
}

export async function createGame(name: string) {
  const existedGame = await findGame(name);

  if (existedGame) {
    return null;
  }

  const game = new Game({ name });
  const savedGame = await game.save();
  const updatedGame = await createGameToken(savedGame.id);

  return { game: updatedGame };
}
