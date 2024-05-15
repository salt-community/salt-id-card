import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./form.css";
import { listOfCourses, listOfLocations } from "../../constants.ts";
import { dateValidation } from "../../utils/utils.ts";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};
export const Form = ({ onChange }: Props) => {
  const [dateError, setDateError] = useState(false);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDateError(!dateValidation(e.target.value));
  };

  return (
    <form className="form">
      <label htmlFor="course">Course:</label>
      <select name="course" onChange={onChange} defaultValue="">
        <option value="">Select Course</option>
        {listOfCourses.map(({ id, name, value }) => (
          <option value={name} key={id}>
            {value}
          </option>
        ))}
      </select>
      <label htmlFor="course">Location:</label>
      <select name="location" onChange={onChange}>
        {listOfLocations.map(({ id, name, value }) => (
          <option value={name} key={id}>
            {value}
          </option>
        ))}
      </select>
      <label htmlFor="date">Start date:</label>
      <input
        type="date"
        name="date"
        onChange={onChange}
        onInput={(e: ChangeEvent<HTMLInputElement>) => handleDateChange(e)}
      ></input>
      {dateError && (
        <span className="form-date__error">
          Invalid date. Please verify that year is later than 2018
        </span>
      )}
    </form>
  );
};
