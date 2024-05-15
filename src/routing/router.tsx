import { createBrowserRouter } from "react-router-dom";
import App from "../app.tsx";
import { PageNotFound } from "../components";

export const router = createBrowserRouter([
  {
    path: "/salt-id-card/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
]);
