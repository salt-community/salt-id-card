import {createBrowserRouter} from "react-router-dom";
import App from "../app.tsx";
import {PageNotFound} from "../components/page-not-found";


export const router = createBrowserRouter([
  {
    path: "/card/course",
    element: <App/>,
    errorElement: <PageNotFound/>,
  },
]);