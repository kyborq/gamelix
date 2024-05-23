import mongoose from "mongoose";

export interface IPlayer {
  name: string;
  game: mongoose.Types.ObjectId;
}

const playerSchema = new mongoose.Schema<IPlayer>({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
});

const Player = mongoose.model<IPlayer>("Player", playerSchema);

export default Player;
