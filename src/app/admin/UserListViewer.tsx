import { formatDate } from "@/lib/datetime";
import { User } from "@/generated/prisma";
import DepartmentBadge from "@/components/common/badges/DepartmentBadge";
import RollNumberBadge from "@/components/common/badges/RollNumberBadge";

export function UserListViewer({ users }: { users: User[] }) {
  return (
    <div className="w-full border rounded-md shadow-md p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-bg-1">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium uppercase tracking-wider"
              >
                DOB
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium uppercase tracking-wider"
              >
                Roll Number
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium uppercase tracking-wider"
              >
                Department
              </th>
            </tr>
          </thead>

          <tbody className="">
            {users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-fg/10 transition-colors duration-300"
              >
                <td className="px-4 py-6 whitespace-nowrap text-sm font-medium">
                  {user.name || "N/A"}
                </td>
                <td className="px-4 whitespace-nowrap text-sm">
                  {formatDate(user.dob)}
                </td>
                <td className="px-4 whitespace-nowrap text-sm">{user.email}</td>
                <td className="px-4 whitespace-nowrap">
                  <RollNumberBadge num={user.roll_number} />
                </td>
                <td className="px-4 whitespace-nowrap">
                  <DepartmentBadge department={user.department} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
