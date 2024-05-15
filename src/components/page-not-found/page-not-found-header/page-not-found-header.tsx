import { InfoBox, Subtitle, Title } from "../../../components";
import "./page-not-found-header.css"

export const PageNotFoundHeader = () => {
  return (
    <div className="page-not-found-header">
        <Title content="404"/>
        <Subtitle content="Page Not Found"/>
        <InfoBox content="Please check the url or generate one with the form below and try again"/>
    </div>
  );
};
