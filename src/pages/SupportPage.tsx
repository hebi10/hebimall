import React from 'react';
import styles from './SupportPage.module.css'

const SupportPage: React.FC = () => {
  return (
    <section className={styles.supportWrap}>
      <h2>고객 지원 페이지</h2>
      <p>해당 사이트는 개인 포트폴리오 사이트 입니다.</p>
      <strong>사용에 주의해주세요!</strong>
    </section>
  );
};

export default SupportPage;
