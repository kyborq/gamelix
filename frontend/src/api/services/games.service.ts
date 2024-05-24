import { api } from "../api";
import { TCreateGame, TGame } from "../models/game.model";
import { TResult } from "../models/result.model";

export const getGames = async () => {
  try {
    const { data } = await api.get<TResult<TGame[]>>("/games");
    return data.content;
  } catch (e) {
    throw new Error();
  }
};

export const getGame = async (gameName: string) => {
  try {
    const { data } = await api.get<TGame>(`/games/${gameName}`);
    return data;
  } catch (e) {
    throw new Error();
  }
};

export const createGame = async (createGame: TCreateGame) => {
  try {
    const { data } = await api.post<TGame>("/games", createGame);
    return data;
  } catch (e) {
    throw new Error();
  }
};
