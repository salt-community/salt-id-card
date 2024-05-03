import { ChangeEventHandler } from "react";
import "./Style.css";

type FormProps = {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};
export const Form = ({ onChange }: FormProps) => {
  return (
    <form className="form">
      <label>Name:</label>
      <input type="text" name="name" onChange={onChange}></input>
      <label>Start date:</label>
      <input type="date" name="startDate" onChange={onChange}></input>
      <label>Course:</label>
      <select name="course" onChange={onChange}>
        <option value="jfs-sthlm">JFS Stockholm</option>
        <option value="dnfs-sthlm">DNFS Stockholm</option>
        <option value="jsfs-sthlm">JFSF Stockholm</option>
      </select>
    </form>
  );
};
