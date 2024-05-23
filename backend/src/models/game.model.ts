import mongoose from "mongoose";

export interface IGame {
  name: string;
  token?: string;
}

const gameSchema = new mongoose.Schema<IGame>({
  name: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
});

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;
