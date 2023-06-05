import styles from "@/components/TableRow/TableRow.module.css";
import { CLOSED } from "@/constants/constants";

type TableRowProps = {
  dayName: string;
  openingHours: string | null | undefined;
  isToday: boolean;
};

export default function TableRow({
  dayName,
  openingHours,
  isToday,
}: TableRowProps) {
  const dayNameWithCapitalLetter = `${dayName
    .slice(0, 1)
    .toUpperCase()}${dayName.slice(1)}`;
  return (
    <tr className={styles.listItem}>
      <td className={styles.dayName}>
        {dayNameWithCapitalLetter}
        {isToday && <span className={styles.todayBadge}>Today</span>}
      </td>
      {!!openingHours && (
        <td className={openingHours === CLOSED ? styles.greyscaleText : ""}>
          {openingHours}
        </td>
      )}
      {openingHours === undefined && (
        <td className={styles.skeleton} data-testid="listItemSkeleton"></td>
      )}
    </tr>
  );
}
