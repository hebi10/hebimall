import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';
import styles from './FullLayout.module.css';
import Footer from '../global/Footer';

const FullLayout: React.FC = () => {
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

export default FullLayout;
