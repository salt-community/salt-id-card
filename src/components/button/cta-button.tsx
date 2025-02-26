import "./cta-button.css";
import React from "react";

type Variant = "primary" | "secondary" | "info" | "danger" | "success";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  variant: Variant;
  disabled?: boolean;
};

export const CtaButton = ({ onClick, children, variant, disabled}: Props) => {

  return (
    <button className={`cta ${variant}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
