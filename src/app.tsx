import { useLocation } from "react-router-dom";
import "./app.css";
import { Main } from "./components";

const App = () => {
  const course = new URLSearchParams(useLocation().search).get("name");
  // console.log(date)
  const startDate = new URLSearchParams(useLocation().search).get("date");
  // useEffect(() => {
  //   console.log(course);
  //   if (course == null || startDate == null) {
  //     console.log("no course");
  //   }
  // }, []);
  return (
    <div className="root">
      <h2>{course}</h2>
      <h2>{startDate}</h2>
      <Main />
    </div>
  );
};
export default App;
