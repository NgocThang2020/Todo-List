"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", password: "" });

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.name === form.name && u.password === form.password
    );

    if (!user) {
      alert("Sai tên hoặc mật khẩu!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    router.push("/dashboard");
  };

  const handleForgotPassword = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const name = prompt("Nhập họ và tên để đổi mật khẩu:");
    const userIndex = users.findIndex((u) => u.name === name);

    if (userIndex === -1) {
      alert("Không tìm thấy tài khoản!");
      return;
    }

    const newPass = prompt("Nhập mật khẩu mới:");
    users[userIndex].password = newPass;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đổi mật khẩu thành công!");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Đăng nhập</h1>

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
          type="password"
          placeholder="Mật khẩu"
          autoComplete="off"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border px-3 py-2 rounded"
        />

        <button
          onClick={handleLogin}
          className="bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium"
        >
          Đăng nhập
        </button>

        <p
          onClick={handleForgotPassword}
          className="text-sm text-blue-600 hover:underline cursor-pointer text-center"
        >
          Quên mật khẩu?
        </p>

        <p className="text-center text-sm">
          Chưa có tài khoản?{" "}
          <span
            onClick={() => router.push("/")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
}
