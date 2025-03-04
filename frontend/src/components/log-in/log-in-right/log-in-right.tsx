import { SignInButton } from "@clerk/clerk-react";
import { InfoBox, Button } from "../../../components";
import "./log-in-right.css";

export const LogInRight = () => {
  return (
    <section className="logged-out__right">
      <InfoBox>
        Before you sign in make sure to upload your picture to your github
        profile.
      </InfoBox>
      <SignInButton>
        <Button variant="primary">Sign in</Button>
      </SignInButton>
    </section>
  );
};
