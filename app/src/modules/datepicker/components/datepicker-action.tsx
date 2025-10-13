import { useDatepickerContext } from "../composer/datepicker-composer";

export function Action() {
  const { actions } = useDatepickerContext();

  return <button onClick={actions.confirm}>confirm</button>;
}
