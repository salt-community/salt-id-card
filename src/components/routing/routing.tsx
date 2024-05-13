import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { PageNotFound } from "../../components";
import App from "../../app.tsx";

// export const router = createBrowserRouter([
//   {
//     path: "/card/course",
//     element: <App />,
//     errorElement: <PageNotFound />,
//   },
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/card/course" // <-- "/presentation"
      element={<App />}
      errorElement={<PageNotFound />}
    ></Route>
  ),
  { basename: "/" }
);
