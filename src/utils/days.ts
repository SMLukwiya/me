import dayjs, { Dayjs } from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";

dayjs.extend(relativetime);

export function formatTime(date: string | Dayjs | Date) {
  if (!dayjs(date).isValid()) {
    return null;
  }

  return dayjs(date).fromNow();
}
