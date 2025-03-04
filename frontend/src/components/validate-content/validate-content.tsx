import "./validate-content.css";
import { ValidateContentHeader } from "./validate-content-header";
import { ValidateContentBody } from "./validate-content-body";
import { ValidateContentFooter } from "./validate-content-footer";

export const ValidateContent = () => {
  return (
    <>
      <div className="validate">
        <section className="validate__content">
          <ValidateContentHeader />
          <ValidateContentBody />
        </section>
        <ValidateContentFooter />
      </div>
    </>
  );
};
