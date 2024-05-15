import {Logo, InfoBox, Subtitle} from "../../../components";
import "./log-in-left.css";

export const LogInLeft = () => {
  return (
    <section className="logged-out_left">
      <Logo/>
      <Subtitle content="Sign in to get ID card"/>
      <InfoBox content="Use your @appliedtechnology.se email."/>
    </section>
  );
};
