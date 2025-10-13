// components
import { DatepickerComponent } from "@/modules/datepicker/components/datepicker-component";

// styles
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles["main-layout"]}>
      <main>
        <DatepickerComponent />
      </main>
    </div>
  );
}
