import "./cta-button.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean
};

export const CtaButton = ({ onClick, children, disabled  }: Props) => {

  return (
    <button className="cta" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
