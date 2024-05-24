import mongoose from "mongoose";

export interface IGame {
  name: string;
  isDraft: boolean;
  isDeleted: boolean;
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
  isDraft: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;
