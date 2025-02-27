import { Title } from "../../title";
import { useEffect } from "react";
import "./validate-content-middle.css";
import { Profile } from "../../profile";
import { useSaltDataId } from "../../../hooks/use-salt-data-id";
import { Loading } from "../../loading";
import { InfoBox } from "../../info-box";

export const ValidateContentMiddle = () => {
  const { userData, error, getSaltData } = useSaltDataId();
  useEffect(() => {
    getSaltData();
  }, [getSaltData]);

  return (
    <section className="validate__section-middle">
      {error ? (
        <div className="validate__section-middle__wrapper">
          <Title content="Hello! It looks like you've found a salt ID card that is not valid anymore." />
          <InfoBox>
            While this Salt ID card is no longer valid, we welcome you to
            explore the talent SALT has to offer. Our accelerated career
            programs produce highly skilled Full-Stack Developers who are ready
            to contribute from day one. With over 200 companies in Sweden,
            Norway, and the Netherlands already trusting our graduates, you can
            be confident in the quality and readiness of our developers. 94% of
            our consultants are hired permanently after their consultancy
            period, at no additional cost to employers. Discover how SALT can
            help meet your talent needs and support your growth in the tech
            industry.
          </InfoBox>
        </div>
      ) : userData ? (
        <div className="validate__section-middle__wrapper">
          <>
            <Title content="Hello! It looks like you've found my ID card." />
            <Profile userData={userData} />
          </>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};
