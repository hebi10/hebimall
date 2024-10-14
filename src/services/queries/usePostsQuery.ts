import { useQuery } from '@tanstack/react-query';
import { instance as axios } from '../api';


export const usePostsQuery = () => {
  const result = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(`/posts`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: [
      {"userId": "로딩중...", "title": "로딩중...", "content": "로딩중..."},
      {"userId": "로딩중...", "title": "로딩중...", "content": "로딩중..."},
      {"userId": "로딩중...", "title": "로딩중...", "content": "로딩중..."},
    ],
  });

  return result;
};

export const useFindPostsQuery = (id: string) => {
  const result = useQuery({
    queryKey: ['Posts', id],
    queryFn: async () => {
      const { data } = await axios.get(`/posts/${id}`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: 
    {"userId": "로딩중...", "title": "로딩중...", "content": "로딩중..."}
  });

  return result;
};

