import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "../../types";
import { getSaltCardData } from "../../api/notion";
import { Logo } from "../logo";
import { Title } from "../title";
import { IdCard } from "../id-card";
import { CtaButton } from "../button";

export const ValidateContent = () => {
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
    <>
      <div className="validate">
        <section className="validate__section-top">
          <Logo />
          <CtaButton
            variant="primary"
            onClick={() => window.open("https://salt.dev/contact/", "_blank")}
          >
            Contact
          </CtaButton>
        </section>
        <section className="validate__section-middel">
          <Title content="This salt id-card is valid" />
          <IdCard userData={userData} />
        </section>
        <section className="validate__section-bottom">
          <p>Get in contact with us at Salt</p>
        </section>
      </div>
    </>
  );
};
