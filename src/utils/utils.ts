import html2canvas from "html2canvas";
import {User} from "../types.ts";
import React from "react";

export const handlePrint = async (userData: User, printRef: React.RefObject<HTMLDivElement>) => {
  const element = printRef!.current;
  const canvas = await html2canvas(element!, {
    useCORS: true,
    scale: 4,
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

export const listOfSteps = [
  "Select academic status \"Student\".",
  "In the application section select \"Applied Technology - SALT\" as your school name.",
  "Link your @appliedtechnology.se email to your github account.",
  "Upload Salt ID Card as the proof of your academic status."
]