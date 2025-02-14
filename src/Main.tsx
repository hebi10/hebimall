import React, { ReactNode, useEffect } from 'react';

import App from './components/App';
import FullLayout from './components/layout/FullLayout';
import LandingLayout from './components/layout/LandingLayout';
import MyPageLayout from './components/layout/MyPageLayout';
import UserLayout from './components/layout/UserLayout';
import LoginLayout from './components/layout/LoginLayout';
import HomePage from './pages/common/HomePage';
import CategoryPage from './pages/product/CategoryPage';
import ProductPage from './pages/product/ProductDetailPage';
import CartPage from './pages/product/CartPage';
import CheckoutPage from './pages/product/CheckoutPage';
import SignUpPage from './pages/user/SignUpPage';
import ProfilePage from './pages/user/ProfilePage';
import BoardPage from './pages/board/BoardPage';
import BoardDetailPage from './pages/board/BoardDetailPage';
import AdminPage from './pages/common/AdminPage';
import SupportPage from './pages/support/SupportPage';
import NoticePage from './pages/support/NoticePage';
import FAQPage from './pages/support/FAQPage';
import ReviewPage from './pages/board/ReviewPage';
import LoginPage from './pages/user/LoginPage';
import MyPage from './pages/user/MyPage';
import UserPage from './pages/common/UserPage';
import SettingPage from './pages/common/SettingPage';
import NotFound from './pages/common/NotFound';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WritePage from './pages/write/WritePage';

const queryClient = new QueryClient();
const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/hebimail">
        {children}
      </BrowserRouter>
      <ReactQueryDevtools
        initialIsOpen={true}
      />
    </QueryClientProvider>
  );
}

const Main: React.FC = () => {

  useEffect(() => {
    
  }, [])

  return (
    <App>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" index element={<HomePage />} />
        </Route>
        <Route element={<MyPageLayout />}>
          <Route path="me" element={<MyPage />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<FullLayout />}>
          <Route path="me/edit" element={<SettingPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="board/:id" element={<BoardDetailPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="notice" element={<NoticePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="write" element={<WritePage />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="me/:userId" element={<UserPage />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </App>
  );
}

function AppWrapper() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default AppWrapper;
