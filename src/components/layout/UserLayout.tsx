import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../global/Header';
import Footer from '../global/Footer';

const UserLayout: React.FC = () => {
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

export default UserLayout;
