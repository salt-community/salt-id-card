import { Outlet } from "react-router-dom";
import "./app.css";
import { Main } from "./components";

const App = () => {
  return (
    <div className="root">
      <Outlet />
    </div>
  );
};
export default App;
