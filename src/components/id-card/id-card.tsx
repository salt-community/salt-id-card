import "./id-card.css";
import {User} from "../../types.ts";
import React, {forwardRef} from "react";
import {CardHead} from "./id-card-head";
import {CardBody} from "./id-card-body";
import {CardFooter} from "./id-card-footer";

type Props = {
  userData: User
}
export const IdCard = forwardRef(function IdCard(props: Props, ref: React.ForwardedRef<HTMLDivElement>) {
  const {userData} = props;
  return (
    <div className="card-wrapper" ref={ref}>
      <CardHead />
      <CardBody image={userData.image} name={userData.fullName} />
      <CardFooter email={userData.email} />
    </div>
  );
});
