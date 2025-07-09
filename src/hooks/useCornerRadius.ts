"use client";

import { CORNER_RADIUS, CornerRadiusID } from "@/types/ui";
import { applyCornerRadius } from "@/lib/ui";
import { useState } from "react";

export default function useCornerRadius() {
  const [cornerRadiusID, setCornerRadiusID] = useState<CornerRadiusID>(
    CORNER_RADIUS.MEDIUM
  );

  const setCornerRadius = (cornerRadiusID: CornerRadiusID) => {
    applyCornerRadius(cornerRadiusID);
    setCornerRadiusID(cornerRadiusID);
  };

  return [cornerRadiusID, setCornerRadius] as const;
}
