import "./cta-button.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  disabled: boolean
  className: string
};

export const CtaButton = ({ onClick, children, disabled, className }: Props) => {

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
