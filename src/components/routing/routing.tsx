import {createBrowserRouter} from "react-router-dom";
import {PageNotFound} from "../../components";
import App from "../../app.tsx";

export const router = createBrowserRouter([
  {
    path: "/card/course",
    element: <App/>,
    errorElement: <PageNotFound/>,
  },
]);