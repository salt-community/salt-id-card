import "./cta-button.css";
import React from "react";

type Props = {
  onClick?: ()=> void;
  children: React.ReactNode;
  variant: string,
  disabled?: boolean
};

export const CtaButton = ({ onClick, children, variant, disabled}: Props) => {

  return (
    <button className={`cta ${variant}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
