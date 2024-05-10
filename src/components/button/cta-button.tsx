import "./cta-button.css";
import React from "react";

type Props = {
  onClick?: ()=> void;
  children: React.ReactNode;
  variant: string
};

export const CtaButton = ({ onClick, children, variant}: Props) => {

  return (
    <button className={`cta ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
