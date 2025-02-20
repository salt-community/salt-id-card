import "./validate-content.css";
import { Footer } from "../footer";
import { ValidateContentTop } from "./validate-content-top";
import { ValidateContentMiddle } from "./validate-content-middle";

export const ValidateContent = () => {
  return (
    <>
      <div className="validate">
        <section className="validate__content">
          <ValidateContentTop/>
          <ValidateContentMiddle/>
        </section>
        <section className="validate__section-bottom">
          <Footer />
        </section>
      </div>
    </>
  );
};
