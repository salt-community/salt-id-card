import {Card} from "../card";
import "./id-card.css";
import {User} from "../../types.ts";
import React, {forwardRef} from "react";

type Props = {
  userData: User
}
export const IdCard = forwardRef(function IdCard(props: Props, ref: React.ForwardedRef<HTMLDivElement>){
  const {userData} = props;
  return (
    <Card userData={userData} ref={ref}/>
  );
});
