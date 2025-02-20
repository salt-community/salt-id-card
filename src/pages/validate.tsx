import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "../types";
import { getSaltCardData } from "../api/notion";
import { IdCard, Logo, Title } from "../components";

export function Validate() {
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
    <div className="validate">
      <Logo />
      <Title content="This salt id-card is valid" />
      <IdCard userData={userData} />
      <p>
        Get in contact with us at Salt by clicking{" "}
        <a href="https://salt.dev/contact/">here</a>
      </p>
    </div>
  );
}
