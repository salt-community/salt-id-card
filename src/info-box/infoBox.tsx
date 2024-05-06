import './infoBox.css'
type InfoBoxProp = {
  content: string;
  visible: boolean
};
export const InfoBox = ({ content, visible }: InfoBoxProp) => {
  return <span className={visible ? "info-box visible" : "info-box"}>{content}</span>;
};
