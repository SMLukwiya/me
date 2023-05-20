import dayjs, { Dayjs } from "dayjs";
import relativetime from "dayjs/plugin/relativeTime";

dayjs.extend(relativetime);

type DateType = string | Dayjs | Date;

export function formatTime(date: DateType) {
  if (!dayjs(date).isValid()) {
    return null;
  }

  return dayjs(date).fromNow();
}

export function isUpdate(createdAt: DateType, updatedAt: DateType) {
  if (createdAt.toString() === updatedAt.toString()) {
    return `Posted: ${formatTime(createdAt)}`;
  }
  return `Updated: ${formatTime(updatedAt)}`;
}
