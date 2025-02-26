import { useCallback, useState } from "react";
import { User } from "../../types";
import { getSaltDataEmail } from "../../api/notion";

export const useSaltData = (email?: string) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [error, setError] = useState<boolean>(false);

  const getSaltData = useCallback(async () => {
    if (email) {
      try {
        const data = await getSaltDataEmail(email);
        setUserData({
          uuid: data.uuid,
          email: data.email,
          name: data.name,
          course: data.course,
          endDate: data.endDate,
          image: data.image,
        });
        setError(true);
      } catch {
        setError(true);
      }
    }
  }, [email]);

  return { userData, error, getSaltData };
};