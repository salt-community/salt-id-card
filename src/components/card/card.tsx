import "./card.css";
import { CardHead } from "./card-head";
import { CardBody } from "./card-body/cardBody";
import { FormInputType } from "../../types";
import { CardFooter } from "./card-footer";

type CardProps = {
  input: FormInputType;
};
export const Card = ({ input }: CardProps) => {
  return (
    <div className="card-wrapper">
      <CardHead />
      <CardBody input={input} />
      <CardFooter input={input} />
    </div>
  );
};
