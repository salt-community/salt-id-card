import Subtitle from "../subtitle/subtitle.tsx";
import {listOfSteps} from "../../utils/utils.ts";

export const ApplicationSteps = () => {
  return (
    <>
      <Subtitle content="Application steps:"/>
      <ol>
        {listOfSteps.map(
          (element, index) => {
            return (
              <li key={index}>{element}</li>
            )
          })}
      </ol>
    </>
  );
};