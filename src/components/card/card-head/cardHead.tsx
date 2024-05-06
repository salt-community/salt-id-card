import saltLogo from "../../../assets/salt-logo-dark.svg";
import "./cardHead.css"

export const CardHead = () => {
  return (
    <section className="card-section__head">
      <img src={saltLogo} alt="salt logo" className="card-head__logo" />
      <span className="card-head__name">Applied Technology STHLM AB</span>
      <span className="card-head__status">student</span>
    </section>
  );
};
