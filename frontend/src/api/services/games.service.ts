import { api } from "../api";
import { TGame } from "../models/game.model";
import { TResult } from "../models/result.model";

export const getGames = async () => {
  try {
    const { data } = await api.get<TResult<TGame[]>>("/games");
    return data.content;
  } catch (e) {
    throw new Error();
  }
};
