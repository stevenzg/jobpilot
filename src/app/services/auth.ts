import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface SendCodeRequest {
  email: string;
}

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

export interface UserDto {
  id: string;
  email: string;
  name: string | null;
}

export interface LoginResponse {
  token: string;
  user: UserDto;
}

export const authService = {
  sendCode: async (email: string) => {
    const response = await axios.post(`${API_URL}/api/auth/send-code`, { email });
    return response.data;
  },

  verify: async (email: string, code: string) => {
    const response = await axios.post<LoginResponse>(`${API_URL}/api/auth/verify`, { email, code });
    return response.data;
  }
};
