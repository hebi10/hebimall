import { useQuery } from '@tanstack/react-query';
import { instance as axios } from '../api';
import { PostData, WriteBoardData } from 'src/type/formType';


export const usePostsQuery = () => {
  const result = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(`/posts`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: [
      {"_id": "1", "userId": "작성자...", "title": "제목...", "content": "내용..."},
      {"_id": "2", "userId": "작성자...", "title": "제목...", "content": "내용..."},
      {"_id": "3", "userId": "작성자...", "title": "제목...", "content": "내용..."},
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
    placeholderData: {"_id": "1", "userId": "로딩중...", "title": "로딩중...", "content": "로딩중..."}
  });

  return result;
};


export const createPost = async (write: WriteBoardData): Promise<PostData> => {
  const response = await axios.post('/posts', write, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  });
  return response.data;
};


