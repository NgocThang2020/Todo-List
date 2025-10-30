"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AppstoreOutlined,
  UserSwitchOutlined,
  CheckSquareOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: <AppstoreOutlined /> },
    { href: "/user", label: "User Management", icon: <UserSwitchOutlined /> },
    { href: "/todo", label: "Todo Management", icon: <CheckSquareOutlined /> },
  ];

  const handleLogout = () => {
    // Xóa session đăng nhập (nếu có)
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <aside className="w-64 h-screen bg-gray-200 text-gray-900 p-6 shadow-md flex flex-col justify-between">
      {/* Phần trên: Logo và menu */}
      <div>
        <h1 className="text-2xl font-bold mb-8 text-center text-blue-700">
          📋 Dashboard
        </h1>

        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all ${
                pathname === link.href
                  ? "bg-blue-500 text-white shadow-sm"
                  : "hover:bg-gray-300"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Phần dưới: Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2 rounded-md font-medium text-red-600 hover:bg-red-100 transition-all"
      >
        <LogoutOutlined />
        Đăng xuất
      </button>
    </aside>
  );
}
