import "./subtitle.css";

type Props = {
  children: React.ReactNode;
};
export const Subtitle = ({ children }: Props) => {
  return <h3>{children}</h3>;
};
