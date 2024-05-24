import { Outlet, useParams } from "react-router-dom";

import { Button, PageHeader } from "../../components";
import { CategoryButton } from "../../components/CategoryButton";
import { useGameInfo } from "./hooks/useGameInfo";

export const GamePage = () => {
  const { game } = useParams();
  const gameInfo = useGameInfo(game);

  if (!gameInfo) {
    return null;
  }

  return (
    <>
      <PageHeader
        title={gameInfo.name
          .split("-")
          .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
          .join(" ")}
        action={<Button label="Edit" />}
        primary
      >
        <CategoryButton label="Players" path="players" />
        <CategoryButton label="Leaders" path="leaders" />
        <CategoryButton label="Storage" path="storage" />
        <CategoryButton label="Messages" path="messages" />
        <CategoryButton label="Bugs" path="bugs" />
      </PageHeader>
      <Outlet />
    </>
  );
};
