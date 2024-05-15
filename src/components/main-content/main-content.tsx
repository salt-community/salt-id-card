import {Title, Navbar} from "../../components";
import { MainContentLeft } from "./main-content-left";
import { MainContentRight } from "./main-content-right";
import "./main-content.css";

export const MainContent = () => {
  return (
    <>
      <Navbar/>
          <section className="main-content__section">
              <Title content="Your ID Card"/>
              <div className="main-content__wrapper">
                  <MainContentLeft />
                  <MainContentRight />
              </div>
          </section>
    </>
  );
};
