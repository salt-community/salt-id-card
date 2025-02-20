import { useLocation } from "react-router-dom";
import { IdCard } from "../../id-card";
import { Title } from "../../title";
import { useEffect, useState } from "react";
import { User } from "../../../types";
import { getSaltCardData } from "../../../api/notion";
import "./validate-content-middle.css";

export const ValidateContentMiddle = () => {
  const email = new URLSearchParams(useLocation().search).get("email");
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
      if (email) {
        const idCardData = await getSaltCardData(email);
        setUserData({
          email: email,
          name: idCardData.name,
          course: idCardData.course,
          endDate: idCardData.endDate,
          status: idCardData.status,
          image: idCardData.image,
        });
      }
    };
    execute();
  }, [email]);

  return (
    <section className="validate__section-middle">
      <Title content="This salt id-card is valid" />
      <div className="validate__section-middle__wrapper">
        <IdCard userData={userData} />
      </div>
    </section>
  );
};
