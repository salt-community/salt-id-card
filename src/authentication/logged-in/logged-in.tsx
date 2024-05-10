import { SignedIn, useUser } from "@clerk/clerk-react";
import { handlePrint } from "../../utils/utils.ts";
import { useEffect, useRef, useState } from "react";
import { User } from "../../types.ts";
import { CardInfo, CtaButton, IdCard, Navbar, Title } from "../../components";
import "./logged-in.css";

export const LoggedIn = () => {
  const { user, isSignedIn } = useUser();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    if (user) {
      setUserData({
        email: user.primaryEmailAddress?.emailAddress,
        firstName: user.firstName,
        fullName: user.fullName,
        image: user.externalAccounts[0].imageUrl,
      });
    }
  }, [isSignedIn]);
  const printRef = useRef<HTMLDivElement>(null);
  return (
    <SignedIn>
      <Navbar />
      <section className="logged-in__section">
        <Title content="Your ID Card Snapshot" />
        {userData && (
          <div className="card-id__container">
            <CardInfo name={userData?.firstName} />
            <div className="id-card__wrapper">
              <IdCard userData={userData} ref={printRef} />
              <CtaButton
                onClick={() => handlePrint(userData, printRef)}
                variant="success"
              >
                Download my ID
              </CtaButton>
            </div>
          </div>
        )}
      </section>
    </SignedIn>
  );
};
