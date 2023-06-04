import { useEffect, useState } from "react";
import { getTimetable } from "@/helpers/getTimetable";
import sendError from "@/helpers/sendError";

export function useWorkingHours() {
  const today = new Date();
  const currentDay = today.getDay();
  const [openingHoursStrings, setOpeningHoursStrings] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/openingHours`, {
      signal: abortController.signal,
    })
      .then((result) => result.json())
      .then((data) => {
        setOpeningHoursStrings(getTimetable(data));
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
        sendError(
          "major",
          "Failed to load opening hours",
          window.location.pathname,
          e
        );
        setOpeningHoursStrings({});
      })
      .finally(() => setIsLoading(false));
    return () => {
      abortController.abort();
    };
  }, []);
  return {
    openingHoursStrings,
    currentDay,
    isError,
    isLoading,
  };
}
