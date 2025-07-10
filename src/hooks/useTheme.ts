"use client";

import { THEME, ThemeID } from "@/types/ui";
import { applyTheme } from "@/lib/ui";
import { useState } from "react";

export default function useTheme() {
  const [themeID, setThemeID] = useState<ThemeID>(THEME.DARK);

  const setTheme = (themeID: ThemeID) => {
    applyTheme(themeID);
    setThemeID(themeID);
  };

  return [themeID, setTheme] as const;
}
