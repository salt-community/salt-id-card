import {LoggedOut} from "./logged-out";
import {LoggedIn} from "./logged-in";
import Container from "../components/container/container.tsx";
export const Authentication = () => {

  return (
    <Container>
      <LoggedOut/>
      <LoggedIn/>
    </Container>
  );
};
