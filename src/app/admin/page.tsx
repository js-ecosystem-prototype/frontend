"use client";

import { userData } from "@/types/admin/users-table";
import UserViewer from "./UserViewer";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col gap-12 w-full p-4">
        <UserViewer users={userData.users} />
      </div>
    </>
  );
}
