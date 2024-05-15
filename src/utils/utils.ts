import html2canvas from "html2canvas";
import { User } from "../types.ts";
import React from "react";
import { dateRegex, listOfCourses, listOfLocations } from "../constants.ts";

export const handlePrint = async (
  userData: User,
  printRef: React.RefObject<HTMLDivElement>
) => {
  const element = printRef!.current;
  const canvas = await html2canvas(element!, {
    useCORS: true,
    scale: 4,
    backgroundColor: "transparent",
  });

  const data = canvas.toDataURL("image/png");
  const link = document.createElement("a");

  link.href = data;
  link.download = `${userData!.fullName}.png`;

  document.body.appendChild(link);
  const style = document.createElement("style");
  style.sheet?.insertRule(
    "body > div:last-child img { display: inline-block; }"
  );
  link.click();
  document.body.removeChild(link);
};

export const isDisabled = (date: string, course: string, location: string) => {
  const dateValid = dateValidation(date);
  const courseValid = courseValidation(course);
  const locationValid = locationValidation(location);
  return !dateValid || !courseValid || !locationValid;
};

export const dateValidation = (date: string): boolean => {
  const year = +date.split("-")[0];
  if (year < 2018) return false;
  if (dateRegex.test(date)) return true;
  return false;
};

const courseValidation = (course: string) => {
  if (course === "") return false;
  return (
    [...listOfCourses.filter((element) => element.name === course)].length !== 0
  );
};

const locationValidation = (location: string) => {
  if (location === "") return false;
  return (
    [...listOfLocations.filter((element) => element.name === location)]
      .length !== 0
  );
};
