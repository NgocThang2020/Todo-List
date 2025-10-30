"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    if (!form.name || !form.dob || !form.password || !form.confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Lấy danh sách user hiện có
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Kiểm tra trùng tên
    if (existingUsers.find((u) => u.name === form.name)) {
      alert("Tên này đã được đăng ký!");
      return;
    }

    // Lưu người dùng mới
    const updatedUsers = [...existingUsers, form];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Đăng ký thành công! Hãy đăng nhập để tiếp tục.");
    router.push("/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Đăng ký tài khoản</h1>

      <div className="flex flex-col gap-4 w-80 bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          placeholder="Họ và tên"
          autoComplete="off"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border px-3 py-2 rounded"
        />
        <input
          type="date"
          placeholder="Ngày sinh"
          autoComplete="off"
          value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
          className="border px-3 py-2 rounded"
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
        >
          Đăng ký
        </button>

        <p className="text-center text-sm">
          Đã có tài khoản?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );
}
