import { Button } from "../../button";
import { Logo } from "../../logo";
import "./validate-content-top.css";

export const ValidateContentTop = () => {
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
