import "./card-info.css";
import { ApplicationSteps, Subtitle } from "../../components";
import { useUser } from "@clerk/clerk-react";

export const CardInfo = () => {
  const { user } = useUser();
  return (
    <div className="card-info__container">
      {user && <Subtitle content={`Hi, ${user.firstName}!`} />}
      <main className="card-info-main">
        <p>
          This card can be used to apply for Github Student Developer Pack. You
          can sign up for it {""}
          <a
            href="https://education.github.com/discount_requests/application"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <ApplicationSteps />
      </main>
    </div>
  );
};
