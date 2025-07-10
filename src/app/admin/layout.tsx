import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <AdminSidebar />
      <div className="w-full overflow-auto">{children}</div>
    </div>
  );
}
