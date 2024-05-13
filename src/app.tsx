import "./app.css";
import { useLocation } from "react-router-dom";

function App() {
  const course = new URLSearchParams(useLocation().search).get("name");
  const startDate = new URLSearchParams(useLocation().search).get("date");

  return (
    <>
      <h1>TEST APP</h1>
      <h2>{course}</h2>
      <h2>{startDate}</h2>
      {/* <Main /> */}
    </>
  );
}

export default App;
