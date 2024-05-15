import "./subtitle.css";

type Props = {
  content: string;
};
export const Subtitle = ({ content }: Props) => {
  return <h3>{content}</h3>;
};


