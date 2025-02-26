import { useCallback, useState } from "react";
import { getSaltDataUuid } from "../../api/notion";
import { useLocation } from "react-router-dom";
import { User } from "../../types";

export const useSaltData = () => {
  const uuid = new URLSearchParams(useLocation().search).get("uuid");
  const [userData, setUserData] = useState<User | null>(null);
  const [error, setError] = useState<boolean>(false);

  const getSaltData = useCallback(async () => {
    if (uuid) {
      try {
        const idCardData = await getSaltDataUuid(uuid);
        setUserData({
          uuid: idCardData.uuid,
          email: idCardData.email,
          name: idCardData.name,
          course: idCardData.course,
          endDate: idCardData.endDate,
          image: idCardData.image,
        });
        setError(() => false);
      } catch (error) {
        setError(() => true);
      }
    }
  }, [uuid]);
  return { userData, error, getSaltData };
};
