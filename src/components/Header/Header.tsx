import styles from "@/components/Header/Header.module.css";
import Clock from "@/components/Clock/Clock";

export default function Header({ id }: { id?: string }) {
  /* set h3, because surely it isn't h1 on the page, but still a header */
  return (
    <h3 id={id} className={styles.header}>
      <Clock />
      Opening hours
    </h3>
  );
}
