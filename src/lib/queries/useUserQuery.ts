import { useMutation } from '@tanstack/react-query';
import { instance as axios } from '../api';
import { UserLoginData } from 'src/type/userType';

export const useUserMutation = () => {

  return useMutation({
    mutationKey: ['user'],
    mutationFn: async (userInfo: UserLoginData) => {
      const { data } = await axios.post(`/auth/login`, userInfo);
      return data;
    },
    onSuccess: (data) => {
      if (data.token) {
        localStorage.setItem('token', data.token); // 토큰 저장
      }
    },
  });
};
