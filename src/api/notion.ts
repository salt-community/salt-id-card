import { User } from "../types";

const BACKEND_PATH = import.meta.env.VITE_BACKEND_PATH;

export async function getSaltCardData(
  email: string | undefined
): Promise<User> {
  return {
    name: "Tobias Johansson",
    course: "jfs-sthlm-2024-09-06",
    endDate: "2025-06-01",
    email: email,
    image: "https://avatars.githubusercontent.com/TobiasBlankJohansson",
  };
  const result = await fetch(BACKEND_PATH + email);
  if (!result.ok) {
    throw new Error();
  }
  return (await result.json()) as User;
}
