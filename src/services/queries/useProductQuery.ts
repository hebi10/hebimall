import { useQuery } from '@tanstack/react-query';
import { instance as axios } from '../api';
import placeholderImage from 'src/assets/images/img/placeholder_300.png';


export const useProductQuery = () => {
  const result = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(`/products`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: [
      {
        "id": 1,
        "name": "상품 로딩중",
        "description": "로딩중 1",
        "price": 100,
        "imgUrl": placeholderImage,
        "category": "Electronics"
      },
      {
        "id": 2,
        "name": "상품 로딩중",
        "description": "로딩중 2",
        "price": 200,
        "imgUrl": placeholderImage,
        "category": "Books"
      },
      {
        "id": 3,
        "name": "상품 로딩중",
        "description": "로딩중 3",
        "price": 300,
        "imgUrl": placeholderImage,
        "category": "Clothing"
      },
      {
        "id": 4,
        "name": "상품 로딩중",
        "description": "로딩중 4",
        "price": 400,
        "imgUrl": placeholderImage,
        "category": "Books"
      }
    ],
  });

  return result;
};

export const useFindProductQuery = (id: string) => {
  const result = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data } = await axios.get(`/products/${id}`);
      return data;
    },
    refetchOnWindowFocus: false,
    placeholderData: {
      "id": id,
      "name": "상품 로딩중",
      "description": `로딩중 ${id}`,
      "price": 100,
      "imgUrl": placeholderImage,
      "category": "Electronics"
    }
  });

  return result;
};

