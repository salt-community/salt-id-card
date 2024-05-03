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

  const inputForm = (el: any) => {
    const { name, value } = el.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <Form onChange={inputForm} />
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
