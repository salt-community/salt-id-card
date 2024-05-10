import {SignedIn, useUser} from "@clerk/clerk-react";
import {LoggedInRight, Navbar, Title, LoggedInLeft} from "../../components";
import "./logged-in.css";
import {useEffect, useState} from "react";
import {User} from "../../types.ts";

export const LoggedIn = () => {
  const {user, isSignedIn} = useUser();
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
  return (
    <SignedIn>
      <Navbar/>
      {userData &&
          <section className="logged-in__section">
              <Title content="Your ID Card Snapshot"/>
              <div className="logged-in__wrapper">
                  <LoggedInLeft name={userData.firstName}/>
                  <LoggedInRight userData={userData}/>
              </div>
          </section>}
    </SignedIn>
  );
};
