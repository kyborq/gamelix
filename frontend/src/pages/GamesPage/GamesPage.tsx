import { Button, Card, Grid, PageHeader } from "../../components";
import { CategoryButton } from "../../components/CategoryButton";
import { GameCard } from "./components/GameCard";

export const GamesPage = () => {
  return (
    <>
      <Card title="Activity"></Card>
      <PageHeader title="Games" action={<Button label="Create" />}>
        <CategoryButton label="All" current />
        <CategoryButton label="Drafts" />
        <CategoryButton label="Trash" />
      </PageHeader>
      <Grid
        items={[
          { id: "1", path: "/asd", title: "asdfasfds" },
          { id: "2", path: "/asd", title: "asdfasfds" },
          { id: "3", path: "/asd", title: "asdfasfds" },
          { id: "4", path: "/asd", title: "asdfasfds" },
          { id: "5", path: "/asd", title: "asdfasfds" },
        ]}
        renderItem={(item) => <GameCard title={item.title} url={item.path} />}
      />
    </>
  );
};
