import { CtaButton } from "../button";
import { InfoBox } from "../info-box";
import "./email-not-found-modal.css";
import { SignOutButton } from "@clerk/clerk-react";

type EmailNotFoundModalProps = {
  errorMessage: string;
  onConfirm: () => Promise<void>;
};

export default function EmailNotFoundModal({
  errorMessage,
  onConfirm,
}: EmailNotFoundModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Email Not Found</h2>
        <InfoBox>
          {errorMessage}. Please speak with
          your instructor.
        </InfoBox>
        <div className="modal-footer">
          <SignOutButton>
            <CtaButton variant="info">Cancel</CtaButton>
          </SignOutButton>
          <CtaButton variant="primary" onClick={() => onConfirm()}>
            Try again
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
