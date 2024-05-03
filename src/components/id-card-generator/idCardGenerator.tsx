import { useState } from "react";
import { CtaButton } from "../button";
import { Card } from "../card";
import { Form } from "../form";
import avatar from "../../assets/avatar.png";

export const IdCardGenerator = () => {
  const [input, setInput] = useState({
    name: "",
    startDate: "",
    course: "",
    photo: avatar,
  });

  const inputForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handlePhoto = (e: any) => {
    setInput({
      ...input,
      ["photo"]: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <>
      <Form
        onChange={(e) => inputForm(e)}
        handlePhoto={(e) => handlePhoto(e)}
      />
      <CtaButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        children={undefined}
      />
      <Card input={input} />
    </>
  );
};
