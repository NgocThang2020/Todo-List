"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutOutlined, UserOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const navigation = useRouter();

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col justify-between shadow-lg">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-8">📊 Dashboard</h1>

        {/* Menu Items */}
        <nav className="flex flex-col gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            <LayoutOutlined />
            <span>Admin Management</span>
          </Link>

          <Link
            href="/users"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            <UserOutlined />
            <span>User Accounts</span>
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4">
        <button
          onClick={() => (window.location.href = "/")}
          className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg transition-all duration-200 font-medium"
        >
          ⬅ Exit Dashboard
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
