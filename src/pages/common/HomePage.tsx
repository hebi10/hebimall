import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './HomePage.module.css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import ProductList from '../../services/apiComponents/ProductList';
import banners from '../../services/mockData/mainTopBanners';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          modules={[Navigation]}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <Link to={banner.link}>
                <img src={banner.src} alt={banner.alt} />
              </Link>
            </SwiperSlide>
          ))}

          <div className={styles.swiperButtonPrev}>Prev</div>
          <div className={styles.swiperButtonNext}>Next</div>
        </Swiper>
      </div>
      {/* 문구 */}
      <div className={styles.homeContainer}>
        <div className={styles.banner}>
          <h2>※ 해비몰에 어서오세요 :D</h2>
          <p>개인 포트폴리오 사이트 입니다. 사용에 주의하세요!</p>
          <Link to="/support" className={styles.shopNowBtn}>자세한 내용 확인!</Link>
        </div>
        <section className={styles.featuredProducts}>
          <h2>Featured Products</h2>
          <div className={styles.productList}>
            {/* Add product cards here */}
          </div>
        </section>
      </div>
      {/* 상품 영역 */}
      <ProductList />
    </>
  );
};

export default HomePage;
