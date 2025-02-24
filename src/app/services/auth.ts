import request from './request';

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
  resumeUrl: string | null;
  jobCategories: string[] | null;
  jobTypes: string[] | null;
  locations: string[] | null;
}

// Token management functions
const setToken = (token: string) => {
  localStorage.setItem('token', token);
  document.cookie = `token=${token}; path=/`;
};

const clearToken = () => {
  localStorage.removeItem('token');
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
};

export const authService = {
  sendCode: async (email: string) => {
    return request.post(`/api/auth/send-code`, { email });
  },

  verify: async (email: string, code: string) => {
    const response = await request.post<LoginResponse>('/api/auth/verify', { email, code });
    // Set token in both localStorage and cookie
    setToken(response.data.token);
    return response.data;
  },

  updateSearchMode: async (searchMode: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    return request.put('/api/auth/search-mode', { searchMode }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },

  updateResumeUrl: async (resumeUrl: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    return request.put('/api/auth/resume-url', { resumeUrl }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },

  logout: async () => {
    await request.post('/api/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    });
    clearToken();
    localStorage.removeItem('user');
  }
};
