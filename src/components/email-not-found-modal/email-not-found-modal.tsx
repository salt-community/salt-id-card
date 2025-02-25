import { useState } from "react";
import "./email-not-found-modal.css";

type EmailNotFoundModalProps = {
  isOpen: boolean;
  onConfirm: (email: string) => void;
  onCancel: () => void;
};

export default function EmailNotFoundModal({
  isOpen,
  onConfirm,
  onCancel,
}: EmailNotFoundModalProps) {
  const [privateEmail, setPrivateEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Email Not Found</h2>
        <p>
          We couldn't find your email. Would you like to try again with your
          private email?
        </p>
        <input
          type="email"
          placeholder="Enter private email"
          value={privateEmail}
          onChange={(e) => setPrivateEmail(e.target.value)}
        />
        <div className="modal-footer">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onConfirm(privateEmail)}>
            Try Private Email
          </button>
        </div>
      </div>
    </div>
  );
}
