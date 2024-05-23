import { Outlet } from "react-router-dom";

import { Header, Navigation } from "../components";

export const Root = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Outlet />
    </>
  );
};
