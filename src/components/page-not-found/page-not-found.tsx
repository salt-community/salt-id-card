import "./page-not-found.css";
import { ChangeEvent, useState } from "react";
import { CtaButton, Form, Tooltip } from "../../components";
import { isDisabled } from "../../utils/utils";
import { PageNotFoundHead } from "./page-not-found-head";
import { Clipboard } from "../clipboard";

export const PageNotFound = () => {
  const [input, setInput] = useState({
    date: "",
    course: "",
    location: "sthlm",
  });

  const inputForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const { date, course, location } = input;

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const queryParams = `?date=${date}&name=${course}&location=${location}`;
  const disabled = isDisabled(date, course, location);

  return (
    <div className="page-not-found__container">
      <PageNotFoundHead />
      <Form onChange={inputForm} />
      <Tooltip
        content="Fill all fields!"
        disabled={disabled}
        href={queryParams}
      >
        <CtaButton variant="primary" disabled={disabled}>
          Redirect
        </CtaButton>
      </Tooltip>
      <div className="page-not-found__url-container">
        {baseUrl + queryParams}
        <Clipboard text={baseUrl + queryParams}/>
      </div>
    </div>
  );
};