import Sidebar from "../component/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <main className="flex-1 bg-gray-100 p-8 overflow-auto">{children}</main>
    </div>
  );
}
