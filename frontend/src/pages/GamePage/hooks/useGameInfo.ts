import { useQuery } from "react-query";

import { getGame } from "../../../api/services/games.service";

export const useGameInfo = (gameName?: string) => {
  const { data } = useQuery(["games", gameName], () =>
    gameName ? getGame(gameName) : undefined
  );

  return data;
};
