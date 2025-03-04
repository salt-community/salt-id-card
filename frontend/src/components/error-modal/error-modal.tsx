import { Button } from "../button";
import { InfoBox } from "../info-box";
import "./error-modal.css";
import { SignOutButton } from "@clerk/clerk-react";

type ErrorModalProps = {
  errorMessage: string;
  onConfirm: () => Promise<void>;
};

export default function ErrorModal({
  errorMessage,
  onConfirm,
}: ErrorModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Something when wrong</h2>
        <InfoBox>
          {errorMessage}. Please speak with your instructor to verify if it is
          correct in Notion.
        </InfoBox>
        <div className="modal-footer">
          <SignOutButton>
            <Button variant="info">Cancel</Button>
          </SignOutButton>
          <Button variant="primary" onClick={() => onConfirm()}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
