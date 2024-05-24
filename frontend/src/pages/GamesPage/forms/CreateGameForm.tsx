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
  const { register, handleSubmit, reset, setValue } = useForm<TCreateGame>();
  const { createGame } = useCreateGame((game) => {
    reset();
    modal.close();
    navigate(`/${game.name}`);
  });

  const handleCreateGame = (data: TCreateGame) => {
    createGame(data);
  };

  const sanitizeInput = (value: string) => {
    const lowercasedValue = value.toLowerCase(); // Convert to lowercase
    const alphanumericValue = lowercasedValue.replace(/[^a-z0-9\s-]/g, ""); // Remove non-alphanumeric characters except spaces and hyphens
    const hyphenatedValue = alphanumericValue.replace(/\s+/g, "-"); // Replace spaces with hyphens
    const sanitizedValue = hyphenatedValue.replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
    return sanitizedValue;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setValue("name", sanitizedValue);
  };

  return (
    <Modal state={modal} title="Create Game">
      <Field
        placeholder="game-name"
        {...register("name")}
        onChange={handleInputChange}
      />
      <Button label="Save!" onClick={handleSubmit(handleCreateGame)} />
    </Modal>
  );
};
