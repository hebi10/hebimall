import App from './components/App';
import FullLayout from './components/layout/FullLayout';
import LandingLayout from './components/layout/LandingLayout';
import MyPageLayout from './components/layout/MyPageLayout';
import UserLayout from './components/layout/UserLayout';
import LoginLayout from './components/layout/LoginLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import BoardPage from './pages/BoardPage';
import BoardDetailPage from './pages/BoardDetailPage';
import AdminPage from './pages/AdminPage';
import SupportPage from './pages/SupportPage';
import NoticePage from './pages/NoticePage';
import FAQPage from './pages/FAQPage';
import ReviewPage from './pages/ReviewPage';
import MyPage from './pages/MyPage';
import UserPage from './pages/UserPage';
import SettingPage from './pages/SettingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store, { AppDispatch } from './services/redux/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { decodeJWT } from './hooks/useDecodedToken';
import { getMydata } from './services/redux/slice/userSlice';
import { UserData, DecodedToken } from './type/userType';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function Provider({ children }: React.PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <BrowserRouter basename="/hebimail">
          {children}
        </BrowserRouter>
      </ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decoded = decodeJWT(token) as DecodedToken;
      if (decoded && decoded.exp * 1000 > Date.now()) {
        const userData: UserData = {
          userId: decoded.userId,
          role: decoded.role,
          iat: decoded.iat,
          exp: decoded.exp,
          username: decoded.username,
          nickname: decoded.nickname,
          token,
        };
        dispatch(getMydata(userData));
      } else {
        localStorage.removeItem('jwtToken');
      }
    }
  }, [dispatch]);

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
