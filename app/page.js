"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Welcome to the Admin Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Place to manage Admin Setting and User Accounts.
      </p>

      <button
        onClick={() => (window.location.href = "/dashboard")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
      >
        🚀 Go to Dashboard
      </button>
    </div>
  );
}
