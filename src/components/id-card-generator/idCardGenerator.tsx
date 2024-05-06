import { useRef, useState } from "react";
import { CtaButton } from "../button";
import { Card } from "../card";
import { Form } from "../form";
import avatar from "../../assets/avatar.png";
import html2canvas from "html2canvas";
import "./idCardGenerator.css";

export const IdCardGenerator = () => {
  const [input, setInput] = useState({
    name: "",
    startDate: "",
    course: "",
    photo: avatar,
  });
  const printRef = useRef<HTMLInputElement>(null);

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

  const handlePrint = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element!, {
      scale: 4,
    });

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = data;
    link.download = `${input.name}.png`;

    document.body.appendChild(link);
    const style = document.createElement("style");
    style.sheet?.insertRule(
      "body > div:last-child img { display: inline-block; }"
    );
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="form-container">
        <Form
          onChange={(e) => inputForm(e)}
          handlePhoto={(e) => handlePhoto(e)}
        />
        <CtaButton onClick={handlePrint}>Create card</CtaButton>
      </div>
      <div ref={printRef} className="card-container">
        <Card input={input} />
      </div>
    </>
  );
};
