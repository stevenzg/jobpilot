"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/auth";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // 执行登出操作
    authService.logout();
    // 重定向到首页
    router.push("/");
  }, [router]);

  return null; // 这个页面不需要渲染任何内容，因为会立即重定向
}
