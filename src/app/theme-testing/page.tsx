import { AlertDemo } from "@/components/common/playground/alert";
import { AlertDialogDemo } from "@/components/common/playground/alert-dialog";
import { BadgeDemo } from "@/components/common/playground/badge";
import { ButtonDemo } from "@/components/common/playground/buttons";
import { CalendarDemo } from "@/components/common/playground/calendar";
import { CardDemo } from "@/components/common/playground/card";
import { CheckboxDemo } from "@/components/common/playground/checkbox";
import { CommandDemo } from "@/components/common/playground/command";
import { DataTableDemo } from "@/components/common/playground/data-table";
import { DialogDemo } from "@/components/common/playground/dialog";
import { DropdownMenuDemo } from "@/components/common/playground/dropdown-menu";
import { HoverCardDemo } from "@/components/common/playground/hover-card";
import { InputDemo } from "@/components/common/playground/input";
import { PopoverDemo } from "@/components/common/playground/popover";
import { SelectDemo } from "@/components/common/playground/select";
import { ThemeSelect } from "@/components/common/playground/theme-select";
import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export default function ThemeTesting() {
  const components: {
    name: string;
    basis: number | string;
    component: ReactElement;
  }[] = [
    {
      name: "Alert",
      basis: 100,
      component: <AlertDemo />,
    },
    {
      name: "Alert Dialog",
      basis: "auto",
      component: <AlertDialogDemo />,
    },
    {
      name: "Badges",
      basis: "auto",
      component: <BadgeDemo />,
    },
    {
      name: "Buttons",
      basis: "auto",
      component: <ButtonDemo />,
    },
    {
      name: "Calendar",
      basis: "auto",
      component: <CalendarDemo />,
    },
    {
      name: "Card",
      basis: 100,
      component: <CardDemo />,
    },
    {
      name: "Select",
      basis: "auto",
      component: <SelectDemo />,
    },
    {
      name: "Checkbox",
      basis: 100,
      component: <CheckboxDemo />,
    },
    {
      name: "Input",
      basis: 100,
      component: <InputDemo />,
    },
    {
      name: "Data Table",
      basis: "full",
      component: <DataTableDemo />,
    },
    {
      name: "Command",
      basis: "full",
      component: <CommandDemo />,
    },
    {
      name: "Dialog",
      basis: "full",
      component: <DialogDemo />,
    },
    {
      name: "Dropdown Menu",
      basis: "full",
      component: <DropdownMenuDemo />,
    },
    {
      name: "Hover Card",
      basis: "full",
      component: <HoverCardDemo />,
    },
    {
      name: "Popover",
      basis: "full",
      component: <PopoverDemo />,
    },
  ];
  return (
    <>
      <div className="sticky top-0 z-1 p-6 bg-transparent">
        <div className="flex gap-6 items-center p-6 bg-surface-0 shadow-2xl">
          <p>Theme</p>
          <ThemeSelect />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-12 m-4 p-4">
        {components.map((element) => {
          return (
            <div
              key={element.name}
              className={cn(
                "flex flex-col gap-6 border p-4 h-fit",
                `basis-${element.basis}`
              )}
            >
              <p className="min-w-30 font-semibold text-center">
                {element.name}
              </p>
              {element.component}
            </div>
          );
        })}
      </div>
    </>
  );
}
