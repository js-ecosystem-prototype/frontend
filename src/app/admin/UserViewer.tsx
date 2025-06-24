"use client";

import React, { useState } from "react";

import { User } from "@/generated/prisma";
import { formatDate } from "@/lib/datetime";
import { ViewMode } from "@/types/admin/users-table";
import { Button } from "@/components/ui/button";
import { Image, LayoutGrid, List } from "lucide-react";
import DepartmentBadge from "@/components/common/badges/DepartmentBadge";
import RollNumberBadge from "@/components/common/badges/RollNumberBadge";

export default function UserViewer({ users }: { users: User[] }) {
  const [viewMode, setViewMode] = useState<ViewMode>("LIST");

  const renderListView = () => (
    <div className="w-full rounded-xl shadow-lg p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                DOB
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Roll Number
              </th>
              <th
                scope="col"
                className="px-4 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Department
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name || "N/A"}
                </td>
                <td className="px-4 whitespace-nowrap text-sm text-gray-600">
                  {formatDate(user.dob)}
                </td>
                <td className="px-4 whitespace-nowrap text-sm text-gray-600">
                  {user.email}
                </td>
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

  const renderTileView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden shadow-inner"></div>

          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <h3 className="text-xl font-bold pb-0">
                  {user.name || "Unknown User"}
                </h3>
                <RollNumberBadge num={user.roll_number} />
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-1">{user.email}</p>
            <DepartmentBadge department={user.department}></DepartmentBadge>
          </div>
        </div>
      ))}
    </div>
  );

  const renderThumbnailView = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 flex gap-1 flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-3 overflow-hidden shadow-inner"></div>

          <div className="flex flex-col items-center gap-2">
            <div>
              <h3 className="text-base font-semibold text-gray-800 truncate w-full">
                {user.name || "Unknown User"}
              </h3>
              <p className="text-xs text-gray-500 truncate w-full">
                {user.email}
              </p>
            </div>

            <div className="flex gap-1">
              <RollNumberBadge num={user.roll_number} />
              <DepartmentBadge department={user.department} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 p-8 w-full">
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8 rounded-full bg-white p-2 shadow-md">
        <Button
          variant={viewMode == "LIST" ? "default" : "secondary"}
          size={"icon"}
          onClick={() => setViewMode("LIST")}
        >
          <List />
        </Button>

        <Button
          variant={viewMode == "TILE" ? "default" : "secondary"}
          size={"icon"}
          onClick={() => setViewMode("TILE")}
        >
          <LayoutGrid />
        </Button>

        <Button
          variant={viewMode == "THUMBNAIL" ? "default" : "secondary"}
          size={"icon"}
          onClick={() => setViewMode("THUMBNAIL")}
        >
          <Image />
        </Button>
      </div>

      {viewMode === "LIST" && renderListView()}
      {viewMode === "TILE" && renderTileView()}
      {viewMode === "THUMBNAIL" && renderThumbnailView()}
    </div>
  );
}
