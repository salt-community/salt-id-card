import toast from "react-hot-toast";
import { Tooltip } from "../tooltip";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { Toaster } from "react-hot-toast";

type Props = {
  text: string;
};

export const Clipboard = ({ text }: Props) => {
  const copyLink = () => {
    navigator.clipboard.writeText(text).catch((err) => toast.error(err));
    toast.success("Linked copied to clipboard!");
  };

  return (
    <>
      <Tooltip content="Copy to clipboard!">
        <ClipboardDocumentListIcon className="clipboard" onClick={copyLink} />
      </Tooltip>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
