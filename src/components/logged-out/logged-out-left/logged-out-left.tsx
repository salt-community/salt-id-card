import {Logo, InfoBox} from "../../../components";
import './logged-out-left.css'
import Subtitle from "../../subtitle/subtitle.tsx";

export const LoggedOutLeft = () => {
  return (
    <div className="logged-out_left">
      <Logo/>
      <Subtitle content="Sign in to get ID card"/>
      <InfoBox content="Use your @appliedtechnology.se email."/>
    </div>
  );
};
