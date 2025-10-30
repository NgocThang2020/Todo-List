"use client";

import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const handleDelete = (index) => {
    if (confirm("Bạn có chắc muốn xóa todo này không?")) {
      const updated = todos.filter((_, i) => i !== index);
      setTodos(updated);
      localStorage.setItem("todos", JSON.stringify(updated));
    }
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        📝 Todo Management
      </h1>

      {todos.length === 0 ? (
        <p className="italic text-gray-500">Chưa có todo nào được tạo.</p>
      ) : (
        <table className="w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-300 text-gray-900">
              <th className="p-2 border border-gray-300 text-left">STT</th>
              <th className="p-2 border border-gray-300 text-left">Họ tên</th>
              <th className="p-2 border border-gray-300 text-left">Email</th>
              <th className="p-2 border border-gray-300 text-left">
                Nội dung Todo
              </th>
              <th className="p-2 border border-gray-300 text-left">
                Kiểu Todo
              </th>
              <th className="p-2 border border-gray-300 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((t, i) => (
              <tr key={i} className="hover:bg-gray-100 transition">
                <td className="p-2 border border-gray-300">{i + 1}</td>
                <td className="p-2 border border-gray-300">{t.name}</td>
                <td className="p-2 border border-gray-300">{t.email}</td>
                <td className="p-2 border border-gray-300">{t.todo}</td>
                <td className="p-2 border border-gray-300">{t.type}</td>
                <td className="p-2 border border-gray-300 text-center">
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
