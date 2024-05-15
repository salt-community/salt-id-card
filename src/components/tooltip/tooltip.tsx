import { Tooltip as ReactTooltip } from "react-tooltip";

type Props = {
  children: React.ReactNode;
  content: string;
  disabled?: boolean;
  href?: string 
};

export const Tooltip = ({ children, content, disabled=true, href="#"}: Props) => {
  return (
    <>
      <a
        data-tooltip-id={disabled ? "my-tooltip" : ""}
        data-tooltip-content={content}
        href={href}
      >
        {children}
      </a>
      <ReactTooltip id="my-tooltip" />
    </>
  );
};
