import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDecodedToken from "../../hooks/useDecodedToken";

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const decodedToken = useDecodedToken();

  if(!decodedToken){
    navigate('/login');
  }

  return (
    <div>
      <h1>My Page</h1>
      {decodedToken ? (
        <div>
          <p>ID: {decodedToken.userId}</p>
          <p>Nickname: {decodedToken.nickname}</p>
          <p>등급: {decodedToken.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyPage;
