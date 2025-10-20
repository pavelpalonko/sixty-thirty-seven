// components
import { Datepicker } from "@/modules/datepicker/datepicker";
import { HeroBookSession } from "./components/hero-book-session";

// styles
import styles from "./page.module.css";

export const metadata = {
  title: "Book a Session",
};

export default function Home() {
  return (
    <div className={styles["main-layout"]}>
      <div className={styles["booking-section"]}>
        <HeroBookSession />

        <Datepicker />
      </div>
    </div>
  );
}
