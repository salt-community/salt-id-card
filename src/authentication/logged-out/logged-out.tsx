import { SignInButton, SignedOut } from "@clerk/clerk-react";
import { CtaButton, InfoBox, Logo, Title } from "../../components";
import "./logged-out.css";

export const LoggedOut = () => {
  return (
    <SignedOut>
      <div className="logged-out__container">
        <aside className="logged-out_left">
          <Logo />
          <Title content="Sign in to get ID card" />
          <InfoBox content="Use your @appliedtechnology.se email." />
        </aside>
        <aside className="logged-out_right">
          <InfoBox content="Before you sign in make sure to upload correct image to your email account." />
          <SignInButton>
            <CtaButton variant="primary">Sign in</CtaButton>
          </SignInButton>
        </aside>
      </div>
    </SignedOut>
  );
};
