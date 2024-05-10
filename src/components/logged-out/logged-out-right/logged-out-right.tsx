import {SignInButton} from "@clerk/clerk-react";
import {InfoBox, CtaButton} from "../../../components";
import './logged-out-right.css'

export const LoggedOutRight = () => {
  return (
    <div className="logged-out__right">
      <InfoBox content="Before you sign in make sure to upload your picture to gmail profile."/>
      <SignInButton>
        <CtaButton variant="primary">Sign in</CtaButton>
      </SignInButton>
    </div>
  );
};
