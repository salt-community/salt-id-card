import { IdCard } from "../components";

type IdCard = {
  name: string;
  course: string;
  endDate: string;
  email: string;
  status: string;
};

export function getSaltCardData(email: string): IdCard {
  return {
    name: "Tobias Johansson",
    course: "jfs-sthlm-2024-09-06",
    endDate: "2025-06-01",
    email: "tobias.johansson@appliedtechnology.se",
    status: "PGP",
  };
}
