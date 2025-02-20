import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { User } from "../../types";
import { getSaltCardData } from "../../api/notion";
import { Logo } from "../logo";
import { Title } from "../title";
import { IdCard } from "../id-card";
import { CtaButton } from "../button";
import "./validate-content.css";

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
        <section className="validate__content">
          <section className="validate__section-top">
            <Logo />
            <CtaButton
              variant="primary"
              onClick={() => window.open("https://salt.dev/contact/", "_blank")}
            >
              Contact
            </CtaButton>
          </section>
          <section className="validate__section-middle">
            <Title content="This salt id-card is valid" />
            <div className="validate__section-middle__wrapper">
              <IdCard userData={userData} />
            </div>
          </section>
        </section>
        <section className="validate__section-bottom">
          <p>SALT (School of Applied Technology) is a leading provider of innovative tech education, with a mission to accelerate growth in the tech industry by supplying the market with an unlimited pipeline of top-talented software developers from diverse backgrounds. Through intensive 13-week boot camps, SALT offers a “try and hire” model for skills matching, as well as specialized programs for reskilling and upskilling, enabling businesses to seamlessly integrate and develop skilled developers.</p>
        </section>
      </div>
    </>
  );
};
