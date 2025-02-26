import { CtaButton } from "../../button";
import { Footer } from "../../footer";
import "./validate-content-bottom.css";

export const ValidateContentBottom = () => {
  return (
    <section className="validate__section-bottom">
      <Footer />
      <CtaButton
        variant="primary"
        onClick={() => window.open("https://salt.dev/", "_blank")}
      >
        Read more
      </CtaButton>
    </section>
  );
};
