import { createBrowserRouter } from "react-router-dom";

import { GamePage, GamesPage, PlayersPage, Root } from "./pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <GamesPage />,
      },
      {
        path: "/profile",
        element: <GamesPage />,
      },
      {
        path: ":game",
        element: <GamePage />,
        children: [
          {
            index: true,
            element: <PlayersPage />,
          },
        ],
      },
    ],
  },
]);
