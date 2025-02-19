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
      <CardHead status={userData.status} />
      <CardBody image={userData.image} name={userData.name} course={userData.course} endDate={userData.endDate}/>
      <CardFooter email={userData.email} />
    </div>
  );
});
