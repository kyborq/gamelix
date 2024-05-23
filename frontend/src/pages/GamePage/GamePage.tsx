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
        <CategoryButton label="Players" current />
        <CategoryButton label="Leaders" />
        <CategoryButton label="Storage" />
        <CategoryButton label="Messages" />
        <CategoryButton label="Bugs" />
      </PageHeader>
      <Outlet />
    </>
  );
};
