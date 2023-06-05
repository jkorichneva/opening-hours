"use client";
import styles from "@/components/Worktable/Worktable.module.css";
import Header from "@/components/Header/Header";
import { DAYS } from "@/constants/constants";
import TableRow from "@/components/TableRow/TableRow";
import { useId } from "react";
import { useWorkingHours } from "@/hooks/useWorkingHours";
import { handleClick } from "@/helpers/sendAnalytics";

export default function Worktable() {
  const { openingHoursStrings, currentDay, isError } = useWorkingHours();
  const headerId = useId();

  return (
    <div
      className={styles.card}
      onClick={(event) => handleClick(event.target as HTMLElement)}
    >
      <Header id={headerId} />
      <table aria-labelledby={headerId} className={styles.list}>
        <tbody>
          {DAYS.map((key, index) => (
            <TableRow
              dayName={key}
              key={key}
              openingHours={
                isError
                  ? null
                  : openingHoursStrings[key as keyof typeof openingHoursStrings]
              }
              isToday={index === currentDay - 1}
            />
          ))}
        </tbody>
      </table>
      {isError && (
        <div className={styles.error} aria-live={"polite"}>
          Error, please try refreshing the page
        </div>
      )}
    </div>
  );
}
