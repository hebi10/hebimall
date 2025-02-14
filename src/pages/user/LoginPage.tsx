import React, { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import logo from '../../assets/images/img/img_logo01.png';
import LoginInfo01 from 'src/components/accordion/slice/LoginInfo01';
import LoginInfo02 from 'src/components/accordion/slice/LoginInfo02';
import LoginInfo03 from 'src/components/accordion/slice/LoginInfo03';
import LoginInfo04 from 'src/components/accordion/slice/LoginInfo04';
import LoginInfo05 from 'src/components/accordion/slice/LoginInfo05';
import LoginInfo06 from 'src/components/accordion/slice/LoginInfo06';
import { LoginFormData } from 'src/type/formType';
import { useUserMutation } from 'src/lib/queries/useUserQuery';
import useDecodedToken from 'src/hooks/useDecodedToken';

const LoginPage: React.FC = () => {
  const tokenInfo = useDecodedToken();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginFormData>({
    userId: '',
    password: '',
  });

  if(tokenInfo){
    navigate('/');
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, data, error, isPending } = useUserMutation();

  const handleLogin = async () => {
    try {
      mutate(loginData);
    } catch (error) {
      console.error(error);
    }
  };

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
            disabled={isPending}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={loginData.password}
            onChange={handleInputChange}
            disabled={isPending}
          />
          <button className="btn" onClick={handleLogin} disabled={isPending}>
            {isPending ? '로그인 중...' : '로그인'}
          </button>
        </div>
        {isPending && <div className={styles.errorMessage}>{'무료 백엔드 서버 이용중이라 오래걸릴 수도 있습니다...'}</div>}
        {error && <div className={styles.errorMessage}>[로그인 오류] 내용: {error instanceof Error ? error.message : String(error)}</div>}
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
