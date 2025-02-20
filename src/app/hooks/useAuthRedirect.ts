import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return; // 没有 token，留在当前页面
      }

      try {
        // 获取用户信息
        const response = await axios.get(`${API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const user = response.data;

        // 根据用户信息决定跳转
        if (!user.searchMode) {
          router.push('/onboarding/mode-selection');
        } else if (!user.jobCategories?.length || !user.jobTypes?.length || !user.locations?.length) {
          router.push('/onboarding/diagnostics');
        } else {
          router.push('/dashboard');
        }
      } catch (error) {
        // 如果 token 无效，清除本地存储
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    };

    checkAuthAndRedirect();
  }, [router]);
};
