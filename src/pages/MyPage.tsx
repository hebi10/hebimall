import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDecodedToken from "../hooks/useDecodedToken";

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const decodedToken = useDecodedToken();
  const [isCheckingToken, setIsCheckingToken] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    if (decodedToken === null && !isCheckingToken) {
      navigate('/login');
    } else if (decodedToken !== null) {
      setIsCheckingToken(false); // 토큰 확인 완료 후 로딩 상태 해제
    }
  }, [decodedToken, navigate, isCheckingToken]);

  if (isCheckingToken) {
    return <p>Loading...</p>; // 토큰 확인 중 로딩 표시
  }

  return (
    <div>
      <h1>My Page</h1>
      {decodedToken ? (
        <div>
          <p>ID: {decodedToken.userId}</p> {/* userId 출력 */}
          <p>Nickname: {decodedToken.nickname}</p> {/* Nickname 출력 */}
          <p>등급: {decodedToken.role}</p> {/* role 출력 */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyPage;
