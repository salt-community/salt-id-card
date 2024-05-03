import "./style.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CtaButton = ({ onClick, children }: Props) => {
  return (
    <div className="cta" onClick={onClick}>
      {children}
    </div>
  );
};
