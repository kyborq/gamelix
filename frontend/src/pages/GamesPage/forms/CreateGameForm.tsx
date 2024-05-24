import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { TCreateGame } from "../../../api/models/game.model";
import { Button, Modal } from "../../../components";
import { Field } from "../../../components/Field";
import { TModalState } from "../../../hooks/useModal";
import { useCreateGame } from "../hooks/useCreateGame";

type Props = {
  modal: TModalState;
};

export const CreateGameForm = ({ modal }: Props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<TCreateGame>();
  const { createGame } = useCreateGame((game) => {
    reset();
    modal.close();
    navigate(`/${game.name}`);
  });

  const handleCreateGame = (data: TCreateGame) => {
    createGame(data);
  };

  return (
    <Modal state={modal} title="Create Game">
      <Field placeholder="game-name" {...register("name")} />
      <Button label="Save!" onClick={handleSubmit(handleCreateGame)} />
    </Modal>
  );
};
