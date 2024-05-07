import { ChangeEventHandler } from "react";
import "./form.css";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  handlePhoto: ChangeEventHandler<HTMLInputElement>;
};
export const Form = ({ onChange, handlePhoto }: Props) => {
  return (
    <form className="form">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" onChange={onChange}></input>
      <label htmlFor="startDate">Start date:</label>
      <input type="date" name="startDate" onChange={onChange}></input>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={onChange}></input>
      <label htmlFor="course">Course:</label>
      <select name="course" onChange={onChange}>
        <option value="jfs-sthlm">JFS Stockholm</option>
        <option value="dnfs-sthlm">DNFS Stockholm</option>
        <option value="jsfs-sthlm">JSFS Stockholm</option>
      </select>
      <label htmlFor="photo">Upload photo:</label>
      <input type="file" name="photo" onChange={(e) => handlePhoto(e)}></input>
    </form>
  );
};
