import { res } from "@/types/admin/users-table";
import UserViewer from "./UserViewer";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col gap-12 w-full">
        <h1>User Management</h1>

        <UserViewer users={res.users} />
      </div>
    </>
  );
}
