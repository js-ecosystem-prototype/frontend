import { User } from "@/generated/prisma";
import DepartmentBadge from "@/components/common/badges/DepartmentBadge";
import RollNumberBadge from "@/components/common/badges/RollNumberBadge";

export function UserTileViewer({ users }: { users: User[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="border rounded-md shadow-md p-6 flex gap-4 items-center transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="w-24 h-24 rounded-full bg-primary overflow-hidden"></div>

          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">
                {user.name || "Unknown User"}
              </h3>
              <p className="text-sm">{user.email}</p>
            </div>

            <div className="flex flex-col flex-wrap gap-1">
              <RollNumberBadge num={user.roll_number} />
              <DepartmentBadge department={user.department}></DepartmentBadge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
