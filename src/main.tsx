import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const routers = createBrowserRouter([
  {
    path: "/salt_id_card/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={routers} />
    </ClerkProvider>
  </React.StrictMode>
);
