import styles from "@/components/ListItem/ListItem.module.css";
import { CLOSED } from "@/constants/constants";

type ListItemProps = {
  dayName: string;
  openingHours: string | null | undefined;
  isToday: boolean;
};

export default function ListItem({
  dayName,
  openingHours,
  isToday,
}: ListItemProps) {
  const dayNameWithCapitalLetter = `${dayName
    .slice(0, 1)
    .toUpperCase()}${dayName.slice(1)}`;
  return (
    <li className={styles.listItem}>
      <span className={styles.dayName}>
        {dayNameWithCapitalLetter}
        {isToday && <span className={styles.todayBadge}>Today</span>}
      </span>
      {!!openingHours && (
        <span className={openingHours === CLOSED ? styles.greyscaleText : ""}>
          {openingHours}
        </span>
      )}
      {openingHours === undefined && (
        <span className={styles.skeleton} data-testid="listItemSkeleton"></span>
      )}
    </li>
  );
}
