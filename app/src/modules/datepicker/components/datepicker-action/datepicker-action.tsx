import { useDatepickerContext } from "../../composer/datepicker-composer";

// components
import { Txt } from "@/ui-kit/txt/txt";

// components
import { ButtonFilled } from "@/ui-kit/button/button-filled";

// styles
import styles from "./datepicker-action.module.css";

export function Action() {
  const { actions } = useDatepickerContext();

  return (
    <div className={styles["action-wrapper"]}>
      <ButtonFilled wide onClick={actions.confirm}>
        <Txt color="inherit" weight="semiBold">
          Confirm
        </Txt>
      </ButtonFilled>
    </div>
  );
}
