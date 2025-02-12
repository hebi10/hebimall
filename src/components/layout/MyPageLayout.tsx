import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';
import Footer from '../global/Footer';
import styles from './MyPageLayout.module.css'

const MyPageLayout: React.FC = () => {
  return (
    <>
      <div className={"wrap"}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MyPageLayout;
