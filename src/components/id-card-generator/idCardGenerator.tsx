import { useState } from "react";
import { CtaButton } from "../button";
import { Card } from "../card";
import { Form } from "../form";

export const IdCardGenerator = () => {
  const [input, setInput] = useState({
    name: "",
    startDate: "",
    course: "",
  });

  const inputForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <Form onChange={(e) => inputForm(e)} />
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
