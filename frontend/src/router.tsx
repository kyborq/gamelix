import { createBrowserRouter } from "react-router-dom";

import { GamesPage, Root } from "./pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <GamesPage />,
      },
    ],
  },
]);
