import { Button } from "../../button";
import { Footer } from "../../footer";
import "./validate-content-footer.css";

export const ValidateContentFooter = () => {
  return (
    <section className="validate__section-bottom">
      <Footer />
      <Button
        variant="primary"
        onClick={() => window.open("https://salt.dev/", "_blank")}
      >
        Read more
      </Button>
    </section>
  );
};
