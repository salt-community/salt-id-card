import "./card.css";
import { CardHead } from "./card-head";
import { CardBody } from "./card-body";
import { FormInputType } from "../../types";
import { CardFooter } from "./card-footer";

type Props = {
  formData: FormInputType;
};
export const Card = ({ formData }: Props) => {
  return (
    <div className="card-wrapper">
      <CardHead />
      <CardBody formData={formData} />
      <CardFooter startDate={formData.startDate} />
    </div>
  );
};
