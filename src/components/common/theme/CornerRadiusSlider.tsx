"use client";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentProps<typeof Slider>;

export function CornerRadiusSlider({ className, ...props }: SliderProps) {
  const applyCorner = (radius: number) => {
    document.documentElement.style.setProperty("--radius", `${radius}rem`);
  };

  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      onValueChange={(value) => applyCorner(value[0])}
      {...props}
    />
  );
}
