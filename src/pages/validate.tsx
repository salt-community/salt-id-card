import { useLocation } from "react-router-dom";

export function Validate() {
  const email = new URLSearchParams(useLocation().search).get("email");
  return <p>{email}</p>;
}
