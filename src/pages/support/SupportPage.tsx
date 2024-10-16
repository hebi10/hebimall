import React from 'react';
import styles from './SupportPage.module.css'

const SupportPage: React.FC = () => {
  return (
    <div className={styles.supportWrap}>
      <section>
        <h2>고객 지원 페이지</h2>
        <p>해당 사이트는 개인 포트폴리오 사이트 입니다.</p>
        <strong>사용에 주의해주세요!</strong>
      </section>
      
      <section>
        <h2>Rest Api 관련</h2>
        <p>
          Chat GPT의 도움을 받아 Node.js 서버를 제작하였으며,<br/>
          Render의 무료 호스팅 서비스를 이용하고 있습니다.<br/>
          <br/>
          무료 호스팅이다 보니 첫 요청이 40~50초 정도 소요됩니다.
        </p>
      </section>
      
      <section>
        <h2>업데이트 관련</h2>
        <p>
          상품 업데이트 기능<br/>
          자유 게시판 포스트 업데이트 기능<br/>
          Chat GPT 상담 서비스<br/>
          <br/>
          업데이트 예정 항목입니다.
        </p>
      </section>
    </div>
  );
};

export default SupportPage;
