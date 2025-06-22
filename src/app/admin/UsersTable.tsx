"use client";

import { Gender, Department } from "@/generated/prisma";
import { User } from "@/generated/prisma";
import { useState } from "react";

const respond: { users: User[] } = {
  users: [
    {
      email: "john.doe@example.com",
      name: "John Doe",
      address: "123 Main Street",
      cohort: "013",
      department: Department.CM,
      dob: new Date("2000-05-15"),
      facebook: "https://facebook.com/johndoe",
      gender: Gender.MALE,
      major: "Computer Science",
      phone: "09123456789",
      school_email: "john.doe@sinhvien.edu.vn",
      roll_number: "SV001",
    },
    {
      email: "jane.smith@example.com",
      name: "Jane Smith",
      address: "456 Oak Avenue",
      cohort: "014",
      department: Department.TT,
      dob: new Date("2001-08-20"),
      facebook: "https://facebook.com/janesmith",
      gender: Gender.FEMALE,
      major: "Information Systems",
      phone: "09876543210",
      school_email: "jane.smith@sinhvien.edu.vn",
      roll_number: "SV002",
    },
    {
      email: "alex.nguyen@example.com",
      name: "Alex Nguyen",
      address: "789 Pine Road",
      cohort: "015",
      department: Department.DN,
      dob: new Date("1999-12-01"),
      facebook: "https://facebook.com/alexnguyen",
      gender: Gender.OTHER,
      major: "Software Engineering",
      phone: "09012345678",
      school_email: "alex.nguyen@sinhvien.edu.vn",
      roll_number: "SV003",
    },
  ],
};

export default function UsersTable() {
  const [allUsers, setAllUsers] = useState<User[]>(respond.users);

  if (allUsers.length === 0) {
    return <div className="text-6xl font-bold text-center">Loading...</div>;
  }

  return (
    <div className="flex gap-10 border p-4">
      {allUsers.map((user) => (
        <div key={user.email} className="flex gap-4">
          <p>{user.email}</p>
          <p>{user.name}</p>
          <p>{user.department}</p>
        </div>
      ))}
    </div>
  );
}
