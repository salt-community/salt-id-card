import { Button } from "../../button";
import { Footer } from "../../footer";
import "./profile-footer.css";

export const ProfileFooter = () => {
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
