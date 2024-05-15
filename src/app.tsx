import "./app.css";
import { PageNotFound } from "./components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Authentication } from "./components/authentication";
import { isDisabled } from "./utils/utils";

function App() {
  const course = new URLSearchParams(useLocation().search).get("name");
  const date = new URLSearchParams(useLocation().search).get("date");
  const location = new URLSearchParams(useLocation().search).get("location");

  const [missingParams, setMissingParams] = useState(false);

  useEffect(() => {
    if (course == null || date == null || location == null) {
      setMissingParams(true);
    } else if (isDisabled(date!, course!, location!)) {
      setMissingParams(true);
    }
  }, [course, date, location]);

  return missingParams ? (
    <PageNotFound />
  ) : (
    <div className="root">
      <Authentication />
    </div>
  );
}

export default App;
