import { createBrowserRouter } from "react-router-dom";
import { PageNotFound } from "../../components";
import App from "../../app.tsx";
import { Home } from "../../pages/home.tsx";
import { Main } from "../../pages/main.tsx";

export const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/",
        element: <Home />,
      },
      {
        path: "/vite-react-router/contact",
        element: <Main />,
      },
    ],
  },
]);
