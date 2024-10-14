import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import logo from '../assets/images/img/img_logo01.png';
import useDecodedToken from "../hooks/useDecodedToken";
import { LoginFormData } from 'src/type/formType';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from 'src/services/redux/slice/userSlice';
import { RootState, AppDispatch } from '../services/redux/store';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const decodedToken = useDecodedToken();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const [loginData, setLoginData] = useState<LoginFormData>({
    userId: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    let newData: LoginFormData = {
      userId: loginData.userId,
      password: loginData.password,
    };
  
    dispatch(loginUser(newData))
  };

  useEffect(() => {
    if (decodedToken) {
      navigate('/me');
    }
  }, [decodedToken, navigate, loading]);  

  return (
    <>
      <h2 className={styles.loginLogo}>
        <Link to="/">
          <img src={logo} alt="메인 로고" />
        </Link>
      </h2>
      <div className={`${styles.loginBox}`}>
        <h2 className={`pt7_24`}>Login Page</h2>
        <div className={`${styles.inputBox}`}>
          <input
            type="text"
            name="userId"
            placeholder="아이디를 입력해주세요"
            value={loginData.userId}
            onChange={handleInputChange}
            disabled={loading}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={loginData.password}
            onChange={handleInputChange}
            disabled={loading}
          />
          <button className={`btn`} onClick={handleLogin} disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div className={`${styles.account} pt7_18`}>
          <h2>테스트 계정 정보</h2>
          <p>
            <strong>어드민 계정</strong><br />
            "id": "admin1234",<br />
            "password": "adminpassword",<br />
            "nickname": "Admin"<br />
            <br />
            <strong>일반 유저 계정</strong><br />
            "id": "user1234",<br />
            "password": "userpassword",<br />
            "nickname": "User1"<br />
            <br />
            "id": "user5678",<br />
            "password": "userpassword",<br />
            "nickname": "User2"<br />
            <br />
            "id": "user91011",<br />
            "password": "userpassword",<br />
            "nickname": "User3"<br />
            <br />
            "id": "user1213",<br />
            "password": "userpassword",<br />
            "nickname": "User4"<br />
            <br />
            "id": "user1415",<br />
            "password": "userpassword",<br />
            "nickname": "User5"
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
