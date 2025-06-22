import UsersTable from "./UsersTable";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <h1>User Management</h1>
        <UsersTable />
      </div>
    </>
  );
}
