import { Badge } from "@/components/ui/badge";
import { Department } from "@/generated/prisma";
import { formatDepartment } from "@/lib/club";
import { cn } from "@/lib/utils";
import { BookMarked, CodeXml, Plane, Smile, Star } from "lucide-react";

export default function DepartmentBadge({
  department,
}: {
  department: Department | null;
}) {
  const iconMap: Record<Department, React.ReactElement> = {
    [Department.CM]: <CodeXml />,
    [Department.TT]: <Smile />,
    [Department.DN]: <Plane />,
    [Department.VH]: <Star />,
    [Department.ND]: <BookMarked />,
  };

  return (
    <Badge
      variant="secondary"
      className={cn(
        department === Department.CM && "bg-violet-200 text-violet-900",
        department === Department.TT && "bg-yellow-200 text-yellow-900",
        department === Department.DN && "bg-blue-200 text-blue-900",
        department === Department.VH && "bg-green-200 text-green-900",
        department === Department.ND && "bg-orange-200 text-orange-900"
      )}
    >
      {department ? iconMap[department] : ""}
      {formatDepartment(department)}
    </Badge>
  );
}
