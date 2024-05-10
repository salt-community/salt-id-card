import {SignInButton, SignedOut} from "@clerk/clerk-react";
import {CtaButton} from "../../components/button";
import {Title} from "../../components/title";
import logo from "../../assets/salt-logo-dark.svg"
import './logged-out.css'
import {InfoBox} from "../../components/info-box";

export const LoggedOut = () => {
  return (
    <SignedOut>
      <div className="logged-out__container">
        <aside className="logged-out_left">
          <img src={logo} alt="salt logo"/>
          <Title content="Sign in to get ID card"/>
          <InfoBox content="Use your @appliedtechnology.se email."/>
        </aside>
        <aside className="logged-out_right">
          <InfoBox content="Before you sign in make sure to upload correct image to your email account."/>
          <SignInButton>
            <CtaButton variant="primary">Sign in</CtaButton>
          </SignInButton>
        </aside>
      </div>
    </SignedOut>
  );
};
