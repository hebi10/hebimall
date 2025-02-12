import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LoginLayout.module.css';
import SimpleHeader from '../global/SimpleHeader';
import Footer from '../global/Footer';

const LoginLayout: React.FC = () => {
  return (
    <>
      <div className={"wrap"}>
        <SimpleHeader />
        <main className={`${styles.main} flex-center-box`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;
