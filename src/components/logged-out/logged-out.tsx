import "./logged-out.css";
import {LoggedOutLeft, LoggedOutRight} from "../../components";
import {SignedOut} from "@clerk/clerk-react";

export const LoggedOut = () => {
  return (
    <SignedOut>
      <div className="logged-out-container">
        <LoggedOutLeft/>
        <LoggedOutRight/>
      </div>
    </SignedOut>
  );
};