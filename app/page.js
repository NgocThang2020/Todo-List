"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Kiểm tra xem có người dùng nào trong localStorage không
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = localStorage.getItem("loggedInUser");

    if (currentUser) {
      router.push("/dashboard"); // Nếu đã đăng nhập → Dashboard
    } else if (users.length === 0) {
      router.push("/register"); // Nếu chưa có tài khoản → Đăng ký
    } else {
      router.push("/login"); // Nếu có tài khoản nhưng chưa đăng nhập → Login
    }
  }, [router]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 text-gray-700">
      <h1 className="text-2xl font-semibold">
        Đang tải... vui lòng chờ trong giây lát
      </h1>
    </div>
  );
}
