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
        department === Department.CM && "bg-blue text-blue-fg",
        department === Department.TT && "bg-green text-green-fg",
        department === Department.DN && "bg-maroon text-maroon-fg",
        department === Department.VH && "bg-peach text-peach-fg",
        department === Department.ND && "bg-pink text-pink-fg"
      )}
    >
      {department ? iconMap[department] : ""}
      {formatDepartment(department)}
    </Badge>
  );
}
