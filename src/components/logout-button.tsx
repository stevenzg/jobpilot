"use client";

import { useRouter } from "next/navigation";
import { authService } from "@/app/services/auth";

interface LogoutButtonProps {
  className?: string;
}

export function LogoutButton({ className }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = () => {
    authService.logout();
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className={`text-sm text-gray-600 hover:text-gray-900 ${className || ""}`}
    >
      Logout
    </button>
  );
}
