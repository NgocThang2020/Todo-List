"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  return (
    <div className="p-6 text-gray-300">
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Danh sách tài khoản</h2>

        {users.length === 0 ? (
          <p className="text-gray-400 italic">
            Chưa có tài khoản nào được thêm.
          </p>
        ) : (
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-2 border border-gray-600 text-left">#</th>
                <th className="p-2 border border-gray-600 text-left">Tên</th>
                <th className="p-2 border border-gray-600 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i} className="hover:bg-gray-700">
                  <td className="p-2 border border-gray-600">{i + 1}</td>
                  <td className="p-2 border border-gray-600">{u.name}</td>
                  <td className="p-2 border border-gray-600">{u.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
