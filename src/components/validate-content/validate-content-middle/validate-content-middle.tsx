import { useLocation } from "react-router-dom";
import { Title } from "../../title";
import { useEffect, useState } from "react";
import { User } from "../../../types";
import { getSaltDataUuid } from "../../../api/notion";
import "./validate-content-middle.css";
import { Profile } from "../../profile";

export const ValidateContentMiddle = () => {
  const uuid = new URLSearchParams(useLocation().search).get("uuid");
  const [userData, setUserData] = useState<User>({
    uuid: "loading...",
    email: "loading...",
    name: "loading...",
    course: "loading...",
    endDate: "loading...",
    image: "loading...",
  });

  useEffect(() => {
    const execute = async () => {
      if (uuid) {
        const idCardData = await getSaltDataUuid(uuid);
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
  }, [uuid]);

  return (
    <section className="validate__section-middle">
      <Title content="Hello! It looks like you've found my ID card." />
      <div className="validate__section-middle__wrapper">
        <Profile userData={userData} />
      </div>
    </section>
  );
};
