import axios from 'axios';
import { LoginFormData } from '../type/formType';

export const instance = axios.create({
  // baseURL: 'http://hebi10.cafe24app.com',
  baseURL: 'https://node-hebimall.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인터셉터를 추가하여 모든 요청에 토큰을 포함시킵니다.
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // 로컬 스토리지에서 'token'을 가져옴
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Authorization 헤더에 토큰 포함
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getProducts() {
  try {
    const response = await instance.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
}

export async function login(credentials: LoginFormData) {
  try {
    const response = await instance.post('/auth/login', credentials);

    // 로그인 성공 시 JWT 토큰을 로컬 스토리지에 저장
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token); // 'userToken'이라는 키로 저장
    }

    return response.data;
  } catch (error: any) {
    console.error('Login error:', error.response?.data || error.message);
    throw new Error('Failed to log in.');
  }
}

export async function logout() {
  try {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('token');

    // 서버에 로그아웃 요청 (서버에서 세션을 관리하는 경우)
    const response = await instance.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw new Error('Failed to log out.');
  }
}
