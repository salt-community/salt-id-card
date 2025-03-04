import "./validate-content.css";
import { ValidateContentTop } from "./validate-content-header";
import { ValidateContentMiddle } from "./validate-content-body";
import { ValidateContentBottom } from "./validate-content-footer";

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
