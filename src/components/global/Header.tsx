import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Menu from './Menu';
import Search from './Search';
import styles from './Header.module.css';

import logo from '../../assets/images/img/img_logo01.png';
import logo_mini from '../../assets/images/img/img_miniLogo02.png';
import icon_cart from "../../assets/images/svg/icon_cart.svg";
import icon_search from "../../assets/images/svg/icon_search.svg";
import icon_user from "../../assets/images/svg/icon_user.svg";

type Observer = HTMLDivElement | null;

type HeaderIconProps = {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

function HeaderOptionSwiper() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
    >
      {['Category', 'Profile', 'Board', 'Support', '', '', ''].map((item, index) => (
        <SwiperSlide key={`${item}-${index}`}>
          <Link to={`/${item.toLowerCase()}`}>{item}</Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const HeaderIcion: React.FC<HeaderIconProps> = ({ setShowSearch }) => {
  return (
    <>
      <div className={styles.searchIcon} onClick={() => setShowSearch(true)}>
        <img src={icon_search} alt="검색 아이콘" />
      </div>
      <Link to="/cart" className={styles.cart}>
        <img src={icon_cart} alt="장바구니 아이콘" />
      </Link>
      <Link to="/login" className={styles.user}>
        <img src={icon_user} alt="유저 아이콘" />
      </Link>
    </>
  );
};


const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const fixedHeadRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver 콜백 함수
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsSticky(!entry.isIntersecting);
  };

  // IntersectionObserver 설정 함수
  const setupObserver = (node: Observer) => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  };

  useEffect(() => {
    return setupObserver(headerRef.current);
  }, []);

  return (
    <>
      <Menu onClose={() => setShowMenu(false)} className={`${styles.menu} ${showMenu ? styles.menuVisible : ''}`} />
      <Search onClose={() => setShowSearch(false)} className={`${styles.search} ${showSearch ? styles.searchVisible : ''}`} />
      <header ref={headerRef} className={`${styles.header}`}>
        <ul className={`${styles.headBox} flex-spaceBetween-box`}>
          <li className={styles.leftBox} onClick={() => setShowMenu(true)}>
            <span></span>
            <span></span>
          </li>
          <li className={styles.logoWrap}>
            <h1 className={styles.logo}>
              <Link to="/"><img src={logo} alt="메인 로고" /></Link>
            </h1>
          </li>
          <li className={styles.rightBox}>
            <HeaderIcion setShowSearch={setShowSearch} />
          </li>
        </ul>

        <HeaderOptionSwiper />
      </header>

      <div ref={fixedHeadRef} className={`${styles.fixed_head} ${isSticky ? styles.sticky : ''}`}>

        <div className={styles.scrollLogo}>
          <Link to="/"><img src={logo_mini} alt="메인 로고" /></Link>

          <div className={styles.linkBox}>
            <HeaderIcion setShowSearch={setShowSearch} />
          </div>
        </div>

        <HeaderOptionSwiper />
      </div>
    </>
  );
};

export default Header;
