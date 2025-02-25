import { useState } from "react";
import "./email-not-found-modal.css";
import { SignOutButton } from "@clerk/clerk-react";

type EmailNotFoundModalProps = {
  onConfirm: (email: string) => Promise<void>;
};

export default function EmailNotFoundModal({
  onConfirm,
}: EmailNotFoundModalProps) {
  const [privateEmail, setPrivateEmail] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Email Not Found</h2>
        <p>
          We couldn't find your email in the Notion database. Please speak with
          your instructor, or would you like to try again with your private
          email?
        </p>
        <input
          type="email"
          placeholder="Enter private email"
          value={privateEmail}
          onChange={(e) => setPrivateEmail(e.target.value)}
        />
        <div className="modal-footer">
          <SignOutButton>
            <button>Cancel</button>
          </SignOutButton>
          <button onClick={() => onConfirm(privateEmail)}>
            Try Private Email
          </button>
        </div>
      </div>
    </div>
  );
}
