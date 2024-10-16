import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/");
  }, [])

  return (
    <>
    </>
  );
};

export default NotFound;
