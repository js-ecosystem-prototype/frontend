import { User } from "@/generated/prisma";
import DepartmentBadge from "@/components/common/badges/DepartmentBadge";
import RollNumberBadge from "@/components/common/badges/RollNumberBadge";

export function UserThumbnailViewer({ users }: { users: User[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="border rounded-md shadow-md p-4 flex gap-1 flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-3 overflow-hidden shadow-inner"></div>

          <div className="flex flex-col items-center gap-2">
            <div>
              <h3 className="text-base font-semibold truncate w-full">
                {user.name || "Unknown User"}
              </h3>
              <p className="text-xs truncate w-full">{user.email}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-1">
              <RollNumberBadge num={user.roll_number} />
              <DepartmentBadge department={user.department} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
