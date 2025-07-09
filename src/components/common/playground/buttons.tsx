import { Button } from "@/components/ui/button";
import { ChevronRightIcon, GitBranchIcon, Loader2Icon } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="default" size="icon" className="size-8">
          <ChevronRightIcon />
        </Button>
        <Button variant="secondary">
          <ChevronRightIcon />
        </Button>
        <Button variant="destructive">
          <ChevronRightIcon />
        </Button>
        <Button variant="outline">
          <ChevronRightIcon />
        </Button>
        <Button variant="ghost">
          <ChevronRightIcon />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="outline" size="sm">
          <GitBranchIcon /> New Branch
        </Button>
        <Button size="sm" disabled>
          <Loader2Icon className="animate-spin" />
          Please wait
        </Button>
      </div>
    </div>
  );
}
