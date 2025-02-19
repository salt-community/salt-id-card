import { IdCard } from "../types";

export async function getSaltCardData(email: string | undefined): Promise<IdCard> {
  return {
    name: "Tobias Johansson",
    course: "jfs-sthlm-2024-09-06",
    endDate: "2025-06-01",
    email: email,
    status: "PGP",
  };
}
