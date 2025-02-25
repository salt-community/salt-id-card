import { IdCard, CtaButton } from "../../../components";
import { handlePrint } from "../../../utils/utils.ts";
import { useEffect, useRef, useState } from "react";
import "./main-content-right.css";
import { useUser } from "@clerk/clerk-react";
import { User } from "../../../types.ts";
import { getSaltDataEmail } from "../../../api/notion.ts";

export const MainContentRight = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();
  const [userData, setUserData] = useState<User>({
    uuid: "loding...",
    email: "loading...",
    name: "loading...",
    course: "loading...",
    endDate: "loading...",
    image: "loading...",
  });

  useEffect(() => {
    const execute = async () => {
      if (user) {
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
      }
    };
    execute();
  }, [user]);

  return (
    userData && (
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
    )
  );
};
