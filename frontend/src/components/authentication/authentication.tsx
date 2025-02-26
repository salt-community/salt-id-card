import {SignedIn, SignedOut} from "@clerk/clerk-react";
import {LogIn, MainContent} from "../../components";

export const Authentication = () => {
  return (
    <>
      <SignedOut><LogIn/></SignedOut>
      <SignedIn><MainContent/></SignedIn>
    </>
  );
};

