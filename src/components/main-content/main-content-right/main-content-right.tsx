import { IdCard, CtaButton } from "../../../components";
import { handlePrint } from "../../../utils/utils.ts";
import { useCallback, useEffect, useRef, useState } from "react";
import "./main-content-right.css";
import { useUser } from "@clerk/clerk-react";
import { User } from "../../../types.ts";
import { getSaltDataEmail } from "../../../api/notion.ts";
import EmailNotFoundModal from "../../email-not-found-modal/email-not-found-modal.tsx";

export const MainContentRight = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const [userData, setUserData] = useState<User>();
  const [showEmailNotFound, setShowEmailNotFound] = useState<boolean>(false);

  const getSaltData = useCallback(async () => {
    if (user) {
      try {
        const idCardData = await getSaltDataEmail(
          user.primaryEmailAddress?.emailAddress
        );
        setUserData({
          uuid: idCardData.uuid,
          email: idCardData.email,
          name: idCardData.name,
          course: idCardData.course,
          endDate: idCardData.endDate,
          image: idCardData.image,
        });
        setShowEmailNotFound(() => false);
      } catch (error) {
        setShowEmailNotFound(() => true);
      }
    }
  }, [user]);

  useEffect(() => {
    getSaltData();
  }, [getSaltData]);

  return (
    <>
      {showEmailNotFound && <EmailNotFoundModal onConfirm={getSaltData} />}
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
