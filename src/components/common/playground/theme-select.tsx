"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useTheme from "@/hooks/useTheme";
import { THEME_DATA } from "@/types/ui";
import { Button } from "@/components/ui/button";

export function ThemeSelect() {
  const [theme, setTheme] = useTheme();

  return (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Light</SelectLabel>
          {Object.values(THEME_DATA).map((theme_data) => {
            if (theme_data.type != "light") return;
            return (
              <SelectItem
                key={theme_data.id}
                value={theme_data.id}
                onMouseDown={() => setTheme(theme_data.id)}
              >
                {theme_data.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Dark</SelectLabel>
          {Object.values(THEME_DATA).map((theme_data) => {
            if (theme_data.type != "dark") return;
            return (
              <SelectItem
                key={theme_data.id}
                value={theme_data.id}
                onMouseDown={() => setTheme(theme_data.id)}
              >
                {theme_data.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
