"use client";

import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // Lấy danh sách user từ localStorage khi vào trang
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  // Cập nhật localStorage mỗi khi users thay đổi
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setNewUser({ name: "", email: "" });
  };

  return (
    <div className="p-6 text-gray-300">
      <h1 className="text-3xl font-bold mb-6">👑 Admin Management</h1>

      {/* Form thêm người dùng */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Thêm tài khoản người dùng
        </h2>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Tên người dùng"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border border-gray-500 bg-gray-700 text-white px-3 py-2 rounded-md w-full md:w-1/3"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border border-gray-500 bg-gray-700 text-white px-3 py-2 rounded-md w-full md:w-1/3"
          />

          {/* Nút thêm với icon Ant Design */}
          <button
            onClick={handleAddUser}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all"
          >
            <PlusOutlined />
            <span>Thêm</span>
          </button>
        </div>
      </div>

      {/* Danh sách người dùng */}
      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Danh sách tài khoản</h2>

        {users.length === 0 ? (
          <p className="text-gray-400 italic">Chưa có tài khoản nào.</p>
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
