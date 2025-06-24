import { Badge } from "@/components/ui/badge";

export default function RollNumberBadge({ num }: { num: string }) {
  return <Badge variant="outline">{num}</Badge>;
}
