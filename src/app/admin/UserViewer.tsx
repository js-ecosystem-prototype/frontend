"use client";

import { useState } from "react";

import { UserThumbnailViewer } from "./UserThumbnailViewer";
import { UserListViewer } from "./UserListViewer";
import { UserTileViewer } from "./UserTileViewer";
import { ViewMode } from "@/types/admin/users-table";
import { User } from "@/generated/prisma";
import UserViewerHeader from "./UserViewerHeader";

export default function UserViewer({ users }: { users: User[] }) {
  const [viewMode, setViewMode] = useState<ViewMode>("LIST");

  return (
    <div className="w-full flex flex-col gap-12">
      <UserViewerHeader setViewMode={setViewMode} />

      {viewMode === "LIST" && <UserListViewer users={users} />}
      {viewMode === "TILE" && <UserTileViewer users={users} />}
      {viewMode === "THUMBNAIL" && <UserThumbnailViewer users={users} />}
    </div>
  );
}
