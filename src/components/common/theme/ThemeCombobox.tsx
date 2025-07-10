"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { THEME_DATA, ThemeData } from "@/types/ui";
import useTheme from "@/hooks/useTheme";

export function ThemeConbobox() {
  const [open, setOpen] = React.useState(false);
  const [currentThemeID, applyTheme] = useTheme();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {THEME_DATA[currentThemeID]?.name}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No theme.</CommandEmpty>
            <CommandGroup>
              {Object.values(THEME_DATA).map((themeData: ThemeData) => (
                <CommandItem
                  key={themeData.id}
                  value={themeData.id}
                  onSelect={() => {
                    applyTheme(themeData.id);
                    setOpen(false);
                  }}
                >
                  {themeData.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      themeData.id === currentThemeID
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
