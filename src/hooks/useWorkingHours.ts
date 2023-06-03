import { useEffect, useState } from "react";
import { getTimetable } from "@/helpers/getTimetable";
import sendError from "@/helpers/sendError";

export function useWorkingHours() {
  const today = new Date();
  const currentDay = today.getDay();
  const [openingHoursStrings, setOpeningHoursStrings] = useState({});
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/openingHours`)
      .then((result) => result.json())
      .then((data) => {
        setOpeningHoursStrings(getTimetable(data));
      })
      .catch((e) => {
        setIsError(true);
        sendError(e);
        setOpeningHoursStrings({});
      });
  }, []);
  return {
    openingHoursStrings,
    currentDay,
    isError,
  };
}
