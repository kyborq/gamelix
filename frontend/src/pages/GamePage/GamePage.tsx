import { Outlet } from "react-router-dom";

import { Button, PageHeader } from "../../components";
import { CategoryButton } from "../../components/CategoryButton";

export const GamePage = () => {
  return (
    <>
      <PageHeader
        title="Game Project 1"
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
