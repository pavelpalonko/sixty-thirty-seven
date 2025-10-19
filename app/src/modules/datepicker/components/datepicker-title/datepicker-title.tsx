import Image from "next/image";

// components
import { Txt } from "@/ui-kit/txt/txt";

// styles
import styles from "./datepicker-title.module.css";

import title_image from "../../../../../public/title-image.png";

export function Title() {
  return (
    <div className={styles["title-layout"]}>
      <div className={styles["image-wrapper"]}>
        <Image src={title_image} fill alt="Title" />
      </div>

      <div className={styles["description-wrapper"]}>
        <h2 className={styles["header"]}>Book a Session</h2>

        <div>
          <Txt size="medium" color="description">
            Choose a date and time that is convenient for you to e-meet your
            stylist
          </Txt>
        </div>
      </div>
    </div>
  );
}
