import { IdCard } from "../types";

export function getSaltCardData(email: string): IdCard {
  return {
    name: "Tobias Johansson",
    course: "jfs-sthlm-2024-09-06",
    endDate: "2025-06-01",
    email: email,
    status: "PGP",
  };
}
