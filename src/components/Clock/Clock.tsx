"use client";
import styles from "@/components/Clock/Clock.module.css";
import { useState } from "react";
export default function Clock() {
  const [animated, setAnimated] = useState(false);
  return (
    <div
      className={styles.clockFrame}
      onMouseEnter={() => setAnimated(true)}
      onMouseLeave={() => setAnimated(false)}
    >
      <div
        className={`${styles.container} ${
          animated ? styles.minutesContainerAnimated : ""
        }`}
      >
        <div className={styles.minutes}></div>
      </div>
      <div
        className={`${styles.container} ${styles.hoursContainer}
          ${animated ? styles.hoursContainerAnimated : ""}
        `}
      >
        <div className={styles.hours}></div>
      </div>
    </div>
  );
}
