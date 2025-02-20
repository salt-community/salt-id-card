import "./validate-content.css";
import { ValidateContentTop } from "./validate-content-top";
import { ValidateContentMiddle } from "./validate-content-middle";
import { ValidateContentBottom } from "./validate-content-bottom";

export const ValidateContent = () => {
  return (
    <>
      <div className="validate">
        <section className="validate__content">
          <ValidateContentTop />
          <ValidateContentMiddle />
        </section>
        <ValidateContentBottom />
      </div>
    </>
  );
};
