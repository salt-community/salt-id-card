import { Button } from "../../button";
import { Logo } from "../../logo";
import "./validate-content-header.css";

export const ValidateContentHeader = () => {
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
