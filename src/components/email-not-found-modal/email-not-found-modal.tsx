import "./email-not-found-modal.css";
import { SignOutButton } from "@clerk/clerk-react";

type EmailNotFoundModalProps = {
  onConfirm: () => Promise<void>;
};

export default function EmailNotFoundModal({
  onConfirm,
}: EmailNotFoundModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Email Not Found</h2>
        <p>
          We couldn't find your email in the Notion database. Please speak with
          your instructor.
        </p>
        <div className="modal-footer">
          <SignOutButton>
            <button>Cancel</button>
          </SignOutButton>
          <button onClick={() => onConfirm()}>Try Private Email</button>
        </div>
      </div>
    </div>
  );
}
