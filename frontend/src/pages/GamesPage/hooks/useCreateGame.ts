import { useMutation, useQueryClient } from "react-query";

import { TGame } from "../../../api/models/game.model";
import { createGame } from "../../../api/services/games.service";

export const useCreateGame = (onSuccess?: (data: TGame) => void) => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation(createGame, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["games"]);
      onSuccess && onSuccess(data);
    },
  });

  return {
    createGame: mutate,
    isSuccess,
  };
};
