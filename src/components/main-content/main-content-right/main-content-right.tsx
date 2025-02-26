import { IdCard, CtaButton } from "../../../components";
import { handlePrint } from "../../../utils/utils.ts";
import "./main-content-right.css";
import { useUser } from "@clerk/clerk-react";
import EmailNotFoundModal from "../../email-not-found-modal/email-not-found-modal.tsx";
import { useSaltData } from "../../../hooks/index.ts";
import { useEffect, useRef } from "react";

export const MainContentRight = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const { userData, error, getSaltData } = useSaltData(
    user?.primaryEmailAddress?.emailAddress
  );

  useEffect(() => {
    getSaltData();
  }, [getSaltData]);

  return (
    <>
      {error && <EmailNotFoundModal onConfirm={getSaltData} />}
      {userData && (
        <div className="main-content-right__wrapper">
          <IdCard userData={userData!} ref={printRef} />
          <CtaButton
            onClick={() => handlePrint(userData!, printRef)}
            variant="info"
            disabled={false}
          >
            Download my ID
          </CtaButton>
        </div>
      )}
    </>
  );
};
