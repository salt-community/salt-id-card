import "./card.css";
import { CardHead } from "./card-head";
import { CardBody } from "./card-body";
import { CardFooter } from "./card-footer";
import { User } from "../../types.ts";
import React, { forwardRef } from "react";

type Props = {
  userData: User;
};
export const Card = forwardRef(function Card(
  props: Props,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { userData } = props;
  return (
    <div className="card-wrapper" ref={ref}>
      <CardHead />
      <CardBody image={userData.image} name={userData.fullName} />
      <CardFooter email={userData.email} />
    </div>
  );
});
