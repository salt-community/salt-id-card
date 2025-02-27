import { IdCard, CtaButton, Loading } from "../../../components";
import { handlePrint } from "../../../utils/utils.ts";
import "./main-content-right.css";
import { useUser } from "@clerk/clerk-react";
import EmailNotFoundModal from "../../email-not-found-modal/email-not-found-modal.tsx";
import { useSaltDataEmail } from "../../../hooks/index.ts";
import { useEffect, useRef } from "react";

export const MainContentRight = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const { userData, error, message, getSaltData } = useSaltDataEmail(
    user?.primaryEmailAddress?.emailAddress
  );

  useEffect(() => {
    getSaltData();
  }, [getSaltData]);

  const renderContent = () => {
    if (error) {
      return (
        <EmailNotFoundModal errorMessage={message} onConfirm={getSaltData} />
      );
    }

    if (userData) {
      return (
        <>
          <IdCard userData={userData} ref={printRef} />
          <CtaButton
            onClick={() => handlePrint(userData, printRef)}
            variant="info"
          >
            Download my ID
          </CtaButton>
        </>
      );
    }

    return <Loading />;
  };

  return <div className="main-content-right__wrapper">{renderContent()}</div>;
};
