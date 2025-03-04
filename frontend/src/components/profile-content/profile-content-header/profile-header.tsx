import { Button } from "../../button";
import { Logo } from "../../logo";
import "./profile-header.css";

export const ProfileHeader = () => {
  return (
    <section className="validate__section-top">
      <Logo />
      <Button
        variant="primary"
        onClick={() => window.open("https://salt.dev/contact/", "_blank")}
      >
        Contact us
      </Button>
    </section>
  );
};
