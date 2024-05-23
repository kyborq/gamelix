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
          { id: "1", path: "/project", title: "demo-project-1" },
          { id: "2", path: "/project", title: "demo-project-2" },
          { id: "3", path: "/project", title: "demo-project-3" },
          { id: "4", path: "/project", title: "demo-project-4" },
          { id: "5", path: "/project", title: "demo-project-5" },
        ]}
        renderItem={(item) => <GameCard title={item.title} url={item.path} />}
      />
    </>
  );
};
