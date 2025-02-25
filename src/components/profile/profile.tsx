import { User } from "../../types";
import { CtaButton } from "../button";
import { Subtitle } from "../subtitle";
import { Title } from "../title";
import image from "../../assets/mail.png"

type Props = {
  userData: User;
};

export function Profile({ userData }: Props) {
  return (
    <div className="profile">
      <img src={userData.image} alt="Id-card image" />
      <Title content={userData.name}></Title>
      <Subtitle content={userData.course}></Subtitle>
      <CtaButton
        variant="primary"
        onClick={() => window.open("mailto:" +userData.email, "_blank")}
      >
        <img src={image} alt="" />
      </CtaButton>
    </div>
  );
}
