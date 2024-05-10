import Subtitle from "../subtitle/subtitle.tsx";
import {listOfSteps} from "../../utils/utils.ts";

export const ApplicationSteps = () => {
  return (
    <>
      <Subtitle content="Application steps:"/>
      <ol>
        {listOfSteps.map(element => {
          return (
            <li>{element}</li>
          )
        })}
      </ol>
    </>
  );
};