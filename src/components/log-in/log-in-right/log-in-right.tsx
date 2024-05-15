import {SignInButton} from "@clerk/clerk-react";
import {InfoBox, CtaButton} from "../../../components";
import './log-in-right.css'

export const LogInRight = () => {
  return (
    <section className="logged-out__right">
      <InfoBox content="Before you sign in make sure to upload your picture to gmail profile."/>
      <SignInButton>
        <CtaButton variant="primary">Sign in</CtaButton>
      </SignInButton>
    </section>
  );
};
