// components
import { Datepicker } from "@/modules/datepicker/datepicker";

// styles
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["main-layout"]}>
      <div className={styles["datepicker-section"]}>
        <Datepicker />
      </div>
    </div>
  );
}
