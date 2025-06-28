"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Image, LayoutGrid, List } from "lucide-react";
import { ViewMode } from "@/types/admin/users-table";

export default function UserViewerHeader({
  setViewMode,
}: {
  setViewMode: (mode: ViewMode) => void;
}) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-md shadow-sm">
      <ToggleGroup type="single" defaultValue="1" variant={"outline"}>
        <ToggleGroupItem
          value="1"
          className="w-16"
          onClick={() => setViewMode("LIST")}
        >
          <List />
        </ToggleGroupItem>

        <ToggleGroupItem value="2" onClick={() => setViewMode("TILE")}>
          <LayoutGrid />
        </ToggleGroupItem>

        <ToggleGroupItem value="3" onClick={() => setViewMode("THUMBNAIL")}>
          <Image />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
