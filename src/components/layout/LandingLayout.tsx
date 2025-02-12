import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './LandingLayout.module.css';
import Header from '../global/Header';
import Footer from '../global/Footer';

const LandingLayout: React.FC = () => {
  return (
    <>
      <div className={"wrap"}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LandingLayout;
