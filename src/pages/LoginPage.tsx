import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import logo from '../assets/images/img/img_logo01.png';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from 'src/services/redux/slice/userSlice';
import { RootState, AppDispatch } from '../services/redux/store';
import LoginInfo01 from 'src/components/accordion/slice/LoginInfo01';
import LoginInfo02 from 'src/components/accordion/slice/LoginInfo02';
import LoginInfo03 from 'src/components/accordion/slice/LoginInfo03';
import LoginInfo04 from 'src/components/accordion/slice/LoginInfo04';
import LoginInfo05 from 'src/components/accordion/slice/LoginInfo05';
import LoginInfo06 from 'src/components/accordion/slice/LoginInfo06';
import { LoginFormData } from 'src/type/formType';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, decodedToken } = useSelector((state: RootState) => state.user);

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

    const newData: LoginFormData = {
      userId: loginData.userId,
      password: loginData.password,
    };

    await dispatch(loginUser(newData));
  };

  useEffect(() => {
    console.log('Decoded Token in LoginPage:', decodedToken);
    if (decodedToken) {
      navigate('/me');
    }
  }, [decodedToken, navigate]);

  return (
    <>
      <h2 className={styles.loginLogo}>
        <Link to="/">
          <img src={logo} alt="메인 로고" />
        </Link>
      </h2>
      <div className={styles.loginBox}>
        <h2 className="pt7_24">Login Page</h2>
        <div className={styles.inputBox}>
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
          <button className="btn" onClick={handleLogin} disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </div>
        {error && <div className={styles.errorMessage}>[로그인 오류] 내용: {error}</div>}
        <div className={`${styles.account} pt7_18`}>
          <LoginInfo01 /><br />
          <LoginInfo02 /><br />
          <LoginInfo03 /><br />
          <LoginInfo04 /><br />
          <LoginInfo05 /><br />
          <LoginInfo06 /><br />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
