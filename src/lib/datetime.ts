import { NA } from "@/types/generic";
import dayjs from "dayjs";

export const formatDate = (date: Date | null) => {
  if (date === null) {
    return NA;
  }
  
  return dayjs(date).format("DD/MM/YYYY");
};
