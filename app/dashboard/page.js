"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const allTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setUsers(allUsers);
    setTodos(allTodos);
  }, []);

  // Dữ liệu giả cho biểu đồ
  const todoStats = [
    { day: "Th 2", count: 4 },
    { day: "Th 3", count: 7 },
    { day: "Th 4", count: 3 },
    { day: "Th 5", count: 5 },
    { day: "Th 6", count: 8 },
    { day: "Th 7", count: 6 },
    { day: "CN", count: 2 },
  ];

  const userStats = [
    { day: "Th 2", count: 3 },
    { day: "Th 3", count: 4 },
    { day: "Th 4", count: 2 },
    { day: "Th 5", count: 5 },
    { day: "Th 6", count: 6 },
    { day: "Th 7", count: 5 },
    { day: "CN", count: 1 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        📊 Dashboard Overview
      </h1>

      {/* Biểu đồ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="font-semibold mb-2">Số Todo được tạo trong tuần</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={todoStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="font-semibold mb-2">
            Số người dùng hoạt động trong tuần
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={userStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Danh sách người dùng */}
      <div className="bg-gray-200 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Danh sách người dùng</h2>

        {users.length === 0 ? (
          <p className="text-gray-500 italic">Chưa có người dùng nào.</p>
        ) : (
          <table className="w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-300 text-gray-900">
                <th className="p-2 border border-gray-300 text-left">#</th>
                <th className="p-2 border border-gray-300 text-left">Tên</th>
                <th className="p-2 border border-gray-300 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i} className="hover:bg-gray-100 transition">
                  <td className="p-2 border border-gray-300">{i + 1}</td>
                  <td className="p-2 border border-gray-300">{u.name}</td>
                  <td className="p-2 border border-gray-300">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
