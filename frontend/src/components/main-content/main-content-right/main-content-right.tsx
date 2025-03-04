import { IdCard, Button, Loading } from "../../../components";
import { handlePrint } from "../../../utils/utils.ts";
import "./main-content-right.css";
import { useUser } from "@clerk/clerk-react";
import ErrorModal from "../../error-modal/error-modal.tsx";
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
      return <ErrorModal errorMessage={message} onConfirm={getSaltData} />;
    }

    if (userData) {
      return (
        <>
          <IdCard userData={userData} ref={printRef} />
          <Button
            onClick={() => handlePrint(userData, printRef)}
            variant="info"
          >
            Download my ID
          </Button>
        </>
      );
    }

    return <Loading />;
  };

  return <div className="main-content-right__wrapper">{renderContent()}</div>;
};
