import { InfoBox, Subtitle, Title } from "../../../components";
import "./page-not-found-head.css"

export const PageNotFoundHead = () => {
  return (
    <div className="page-not-found-head">
        <Title content="404"/>
        <Subtitle content="Page Not Found"/>
        <InfoBox content="Please check the url or generate one with the form below and try again"/>
    </div>
  );
};
