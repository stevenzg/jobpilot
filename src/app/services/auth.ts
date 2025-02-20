import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface SendCodeRequest {
  email: string;
}

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

export interface LoginResponse {
  token: string;
  id: string;
  email: string;
  name: string | null;
  searchMode: string | null;
  jobCategories: string[] | null;
  jobTypes: string[] | null;
  locations: string[] | null;
}

export const authService = {
  sendCode: async (email: string) => {
    const response = await axios.post(`${API_URL}/api/auth/send-code`, { email });
    return response.data;
  },

  verify: async (email: string, code: string) => {
    const response = await axios.post<LoginResponse>(`${API_URL}/api/auth/verify`, { email, code });
    return response.data;
  },

  logout: () => {
    // 清除本地存储的用户信息
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};
