import Player from "../models/player.model";

export async function createPlayer(gameId: string, playerName: string) {
  const newPlayer = new Player({ game: gameId, name: playerName });
  const savedPlayer = await newPlayer.save();

  return savedPlayer;
}
