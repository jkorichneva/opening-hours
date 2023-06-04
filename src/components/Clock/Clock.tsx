"use client";
import styles from "@/components/Clock/Clock.module.css";
import { useState } from "react";
import { hoverClock } from "@/helpers/sendAnalytics";
export default function Clock() {
  const [animated, setAnimated] = useState(false);
  return (
    <div
      className={styles.clockFrame}
      onMouseEnter={() => setAnimated(true)}
      onMouseLeave={() => {
        setAnimated(false);
        hoverClock();
      }}
      data-testid="clock"
    >
      <div
        className={`${styles.container} ${
          animated ? styles.minContainerAnimated : ""
        }`}
      >
        <div className={styles.min}></div>
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
