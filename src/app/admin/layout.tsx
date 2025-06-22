import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-amber-200">
      <AdminSidebar />
      {children}
    </div>
  );
}
