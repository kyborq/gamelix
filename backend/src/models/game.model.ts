import mongoose from "mongoose";

export interface IGame {
  name: string;
  token?: string;
  players: mongoose.Types.ObjectId[];
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
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;
