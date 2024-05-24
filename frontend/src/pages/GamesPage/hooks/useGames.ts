import { useQuery } from "react-query";

import { getGames } from "../../../api/services/games.service";

export const useGames = () => {
  const { data } = useQuery(["games"], getGames);
  return data || [];
};
