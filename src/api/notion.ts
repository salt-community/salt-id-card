import { User } from "../types";

const BACKEND_PATH = import.meta.env.VITE_BACKEND_PATH;

export async function getSaltDataEmail(
  email: string | undefined
): Promise<User> {
  return {
    uuid: "4c51571d-7244-478c-9fff-9ec8941f0094",
    name: "Tobias Johansson",
    course: "jfs-sthlm-2026-09-06",
    endDate: "2025-06-01",
    email: "tobias.johansson@appliedtechnology.se",
    image: "https://avatars.githubusercontent.com/TobiasBlankJohansson",
  };
  const result = await fetch(BACKEND_PATH + email);
  if (!result.ok) {
    throw new Error();
  }
  return (await result.json()) as User;
}

export async function getSaltDataPrivateEmail(
  privateEmail: string
): Promise<User> {
  return {
    uuid: "4c51571d-7244-478c-9fff-9ec8941f0094",
    name: "Tobias Johansson",
    course: "jfs-sthlm-2024-09-06",
    endDate: "2026-09-06",
    email: "tobias.johansson@appliedtechnology.se",
    image: "https://avatars.githubusercontent.com/TobiasBlankJohansson",
  };
  const result = await fetch(BACKEND_PATH + privateEmail);
  if (!result.ok) {
    throw new Error();
  }
  return (await result.json()) as User;
}

export async function getSaltDataUuid(uuid: string | undefined): Promise<User> {
  return {
    uuid: "4c51571d-7244-478c-9fff-9ec8941f0094",
    name: "Tobias Johansson",
    course: "jfs-sthlm-2024-09-06",
    endDate: "2026-09-06",
    email: "tobias.johansson@appliedtechnology.se",
    image: "https://avatars.githubusercontent.com/TobiasBlankJohansson",
  };
  const result = await fetch(BACKEND_PATH + uuid);
  if (!result.ok) {
    throw new Error();
  }
  return (await result.json()) as User;
}
