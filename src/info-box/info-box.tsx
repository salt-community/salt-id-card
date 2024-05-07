import './info-box.css'
type Props = {
  content: string;
  visible: boolean
};
export const InfoBox = ({ content, visible }: Props) => {
  return <span className={visible ? "info-box visible" : "info-box"}>{content}</span>;
};
