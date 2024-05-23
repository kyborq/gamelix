import { createBrowserRouter, Navigate } from "react-router-dom";

import {
  BugsPage,
  GamePage,
  GamesPage,
  LeadersPage,
  MessagesPage,
  PlayersPage,
  Root,
  StoragePage,
} from "./pages";

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
            element: <Navigate to="players" replace />,
          },
          {
            path: "players",
            element: <PlayersPage />,
          },
          {
            path: "leaders",
            element: <LeadersPage />,
          },
          {
            path: "storage",
            element: <StoragePage />,
          },
          {
            path: "messages",
            element: <MessagesPage />,
          },
          {
            path: "bugs",
            element: <BugsPage />,
          },
        ],
      },
    ],
  },
]);
