import { Department } from "@/generated/prisma";
import { DepartmentName, NA } from "@/types/generic";

export const formatDepartment = (department: Department | null): string => {
  return department ? DepartmentName[department] : NA;
};
