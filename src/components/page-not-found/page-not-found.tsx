import Container from "../container/container.tsx";
import './page-not-found.css'

export const PageNotFound = () => {
  return (
    <Container>
      <span className="page-not-found">Page not found. Please check the url and try again.</span>
    </Container>
  );
};