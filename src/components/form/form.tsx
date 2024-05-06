import { ChangeEventHandler } from "react";
import "./form.css";

type FormProps = {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  handlePhoto: ChangeEventHandler<HTMLInputElement>;
};
export const Form = ({ onChange, handlePhoto }: FormProps) => {
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
      <label>Upload photo:</label>
      <input type="file" name="photo" onChange={(e) => handlePhoto(e)}></input>
    </form>
  );
};
