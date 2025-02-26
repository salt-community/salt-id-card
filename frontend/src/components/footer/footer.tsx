import { footerInfo } from "../../constants";
import { InfoBox } from "../info-box";
import { Logo } from "../logo";

export const Footer = () => {
  return (
    <>
      <Logo />
      <InfoBox>{footerInfo}</InfoBox>
    </>
  );
};
