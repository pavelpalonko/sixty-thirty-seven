import Image from "next/image";

// componsnts
import { Txt } from "@/ui-kit/txt/txt";
import { Clock4 } from "lucide-react";

// styles
import styles from "./hero-book-session.module.css";

import title_image from "../../../../public/hero-title-mobile-image.webp";

export function HeroBookSession() {
  return (
    <div className={styles["hero-mobile"]}>
      <div className={styles["hero-mobile-content-wrapper"]}>
        <div className={styles["hero-mobile-heading"]}>
          <h4 className={styles["hero-mobile-title"]}>Cool session</h4>

          <Txt color="light">Additional type</Txt>
        </div>

        <div className={styles["hero-mobile-badge"]}>
          <Clock4 width={16} height={16} strokeWidth={1} color="white" />

          <Txt color="light" size="small">
            30 min
          </Txt>
        </div>
      </div>

      <div className={styles["hero-mobile-layout"]}>
        <div className={styles["hero-mobile-image-wrapper"]}>
          <div className={styles["hero-mobile-bg-image"]} />

          <Image src={title_image} fill alt="Title" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
