import { CLOSED, DAYS } from "@/constants/constants";
import sendError from "@/helpers/sendError";
type openingHours = {
  [K in (typeof DAYS)[number]]: TimeFormat[];
};
type TimeFormat = {
  type: "open" | "close";
  value: number;
};

type ResultTime = {
  [K in (typeof DAYS)[number]]?: string;
};
export function getTimetable(externalOpeningHours: openingHours) {
  // cloning, so we can mutate data
  const openingHours = { ...externalOpeningHours };
  let result: ResultTime = {};
  DAYS.forEach((dayName, index) => {
    if (!openingHours[dayName].length) {
      result[dayName] = CLOSED;
    } else {
      result[dayName] = handleOpeningHours(dayName, openingHours, index);
    }
  });
  return result;
}

function formatTimeSlot(slot: TimeFormat[]) {
  const opening = slot[0].value / 60 / 60;
  const closing = slot[1].value / 60 / 60;
  return `${formatToAmPM(opening)} - ${formatToAmPM(closing)}`;
}

function formatToAmPM(value: number) {
  if (value < 12) {
    return `${value} AM`;
  } else {
    return `${value === 12 ? 12 : value - 12} PM`;
  }
}

function handleOpeningHours(
  dayName: keyof typeof openingHours,
  openingHours: openingHours,
  day: number
) {
  const openingTimes = openingHours[dayName];
  let result = "";
  if (openingTimes.length % 2 !== 0) {
    const nextDay = day + 1 >= DAYS.length ? 0 : day + 1;
    const nextDayName = DAYS[nextDay] as keyof typeof openingHours;
    const closingTimeNextDay = openingHours[nextDayName][0];
    openingTimes.push(closingTimeNextDay); // using the slot from next day
    // and removing it from next day
    openingHours[nextDayName] = openingHours[nextDayName].filter(
      (item: TimeFormat) => item.value !== closingTimeNextDay.value
    );
  }
  for (let i = 0; i < openingTimes.length; i += 2) {
    if (openingTimes[i] && openingTimes[i + 1]) {
      result += formatTimeSlot([openingTimes[i], openingTimes[i + 1]]);
    }
  }
  return result;
}