import { Logo, InfoBox, Subtitle } from "../../../components";
import "./log-in-left.css";

export const LogInLeft = () => {
  return (
    <section className="logged-out_left">
      <Logo />
      <Subtitle>"Sign in to get ID card"</Subtitle>
      <InfoBox>Use your @appliedtechnology.se email.</InfoBox>
    </section>
  );
};
