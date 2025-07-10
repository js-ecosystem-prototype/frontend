"use client"

import { CORNER_RADIUS_DATA, CornerRadiusID } from "@/types/ui";
import { Button } from "@/components/ui/button";
import useCornerRadius from "@/hooks/useCornerRadius";

export default function CornerRadiusButton({ id }: { id: CornerRadiusID }) {
  const [cornerRadiusID, applyCornerRadius] = useCornerRadius();

  return (
    <Button
      variant={"outline"}
      onClick={() => applyCornerRadius(id)}
    >
      {CORNER_RADIUS_DATA[id].name}
    </Button>
  );
}
