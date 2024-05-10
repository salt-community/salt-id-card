import {Logo} from "../logo";
import {SignOutButton} from "@clerk/clerk-react";
import {CtaButton} from "../button";
import {useLocation} from "react-router-dom";
import './navbar.css'

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <Logo />
      <SignOutButton redirectUrl={location.pathname + location.search}>
        <CtaButton variant="primary">Sign out</CtaButton>
      </SignOutButton>
    </nav>
  );
};
