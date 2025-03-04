import { createBrowserRouter } from "react-router-dom";
import App from "../app.tsx";
import { Profile } from "../pages/profile.tsx";

export const router = createBrowserRouter([
  {
    path: "/salt-id-card/",
    element: <App />,
    errorElement: <></>,
  },
  {
    path: "/salt-id-card/profile",
    element: <Profile />,
    errorElement: <></>,
  },
]);
