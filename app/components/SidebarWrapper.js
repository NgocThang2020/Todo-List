"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function SidebarWrapper({ children }) {
  const pathname = usePathname();

  // Ẩn sidebar ở trang login
  const hideSidebar = pathname === "/login" || pathname === "/register";

  return (
    <div className="flex min-h-screen">
      {!hideSidebar && <Sidebar />}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
