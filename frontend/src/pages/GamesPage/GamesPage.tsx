import { Button, Card, Grid, PageHeader } from "../../components";
import { CategoryButton } from "../../components/CategoryButton";
import { useModal } from "../../hooks/useModal";
import { GameCard } from "./components/GameCard";
import { CreateGameForm } from "./forms/CreateGameForm";
import { useGames } from "./hooks/useGames";

export const GamesPage = () => {
  const games = useGames();
  const createGameModal = useModal();

  return (
    <>
      <Card title="Activity"></Card>
      <PageHeader
        title="Games"
        action={<Button label="Create" onClick={createGameModal.open} />}
      >
        <CategoryButton label="All" current />
        <CategoryButton label="Drafts" />
        <CategoryButton label="Trash" />
      </PageHeader>
      <Grid
        items={games.map((game) => ({
          id: game._id,
          path: game.name,
          title: game.name,
        }))}
        renderItem={(item) => <GameCard title={item.title} url={item.path} />}
      />

      <CreateGameForm modal={createGameModal} />
    </>
  );
};
