import { Title } from "../../title";
import { useEffect } from "react";
import "./validate-content-middle.css";
import { Profile } from "../../profile";
import { useSaltDataId } from "../../../hooks/use-salt-data-id";
import { Loading } from "../../loading";

export const ValidateContentMiddle = () => {
  const { userData, error, getSaltData } = useSaltDataId();
  useEffect(() => {
    getSaltData();
  }, [getSaltData]);

  return (
    <section className="validate__section-middle">
      {error ? (
        <></>
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
