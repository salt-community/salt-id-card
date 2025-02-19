import { IdCard, CtaButton, Tooltip } from "../../../components";
import { handlePrint, isDisabled } from "../../../utils/utils.ts";
import { useEffect, useRef, useState } from "react";
import "./main-content-right.css";
import { useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { User } from "../../../types.ts";
import { getSaltCardData } from "../../../api/notion.ts";

export const MainContentRight = () => {
  const printRef = useRef<HTMLDivElement>(null);
  const date = new URLSearchParams(useLocation().search).get("date");
  const name = new URLSearchParams(useLocation().search).get("name");
  const location = new URLSearchParams(useLocation().search).get("location");
  const disabled = isDisabled(date!, name!, location!);

  const { user } = useUser();
  const [userData, setUserData] = useState<User>({
    email: "loading...",
    name: "loading...",
    course: "loading...",
    endDate: "loading...",
    status: "loading...",
    image: "loading...",
  });

  useEffect(() => {
    const execute = async () => {
      if (user) {
        const idCardData = await getSaltCardData(
          user.primaryEmailAddress?.emailAddress
        );
        setUserData({
          email: user.primaryEmailAddress?.emailAddress,
          name: idCardData.name,
          course: idCardData.course,
          endDate: idCardData.endDate,
          status: idCardData.status,
          image: user.externalAccounts[0].imageUrl,
        });
      }
    };
    execute();
  }, [user]);

  return (
    userData && (
      <div className="main-content-right__wrapper">
        <IdCard userData={userData!} ref={printRef} />
        <Tooltip content="Don't mess with the url!" disabled={disabled}>
          <CtaButton
            onClick={() => handlePrint(userData!, printRef)}
            variant="info"
            disabled={disabled}
          >
            Download my ID
          </CtaButton>
        </Tooltip>
      </div>
    )
  );
};
