import saltLogo from "../../../assets/salt-logo-dark.svg";
import "./card-head.css"

type CardHeadProp = {
  status: string,
}

export const CardHead = ({status}:CardHeadProp) => {
  return (
    <section className="card-section__head">
      <img src={saltLogo} alt="salt logo" className="card-head__logo"/>
      <span className="card-head__name">Applied Technology STHLM AB</span>
      <span className="card-head__status">{status}</span>
    </section>
  );
};
