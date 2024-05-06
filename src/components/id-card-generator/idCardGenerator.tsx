import { useRef, useState } from "react";
import { CtaButton } from "../button";
import { Card } from "../card";
import { Form } from "../form";
import avatar from "../../assets/avatar.png";
import html2canvas from "html2canvas";

export const IdCardGenerator = () => {
  const [input, setInput] = useState({
    name: "",
    startDate: "",
    course: "",
    photo: avatar,
  });
  const printRef = useRef<HTMLDivElement>();

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
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <>
      <Form
        onChange={(e) => inputForm(e)}
        handlePhoto={(e) => handlePhoto(e)}
      />
      <CtaButton onClick={handlePrint}>Create card</CtaButton>
      <Card input={input} ref={printRef} />
    </>
  );
};
