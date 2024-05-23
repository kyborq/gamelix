import { Button, Card, PageHeader } from "../../components";
import { CategoryButton } from "../../components/CategoryButton";

export const GamesPage = () => {
  return (
    <>
      <Card title="Activity"></Card>
      <PageHeader title="Games" action={<Button label="Create" />}>
        <CategoryButton label="All" current />
        <CategoryButton label="Drafts" />
        <CategoryButton label="Trash" />
      </PageHeader>
    </>
  );
};
