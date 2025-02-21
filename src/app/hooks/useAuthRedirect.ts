import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export function useAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return; // 如果没有 token，留在当前页面
      }

      try {
        const response = await axios.get(`${API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const user = response.data;

        // 根据用户信息决定跳转方向
        if (!user.searchMode) {
          router.push('/onboarding/mode-selection');
        } else if (!user.resumeUrl) {
          router.push('/onboarding/resume-upload');
        } else {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Failed to check auth status:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    };

    checkAuth();
  }, [router]);
};
