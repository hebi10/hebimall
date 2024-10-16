import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>해당 페이지는 개인 포트폴리오 사이트 입니다.</p>
      <p>이용에 주의해주세요!</p>

      <p>상호명: 해비몰(주) 제작: 박도영</p>
      <p>Email: sevim0104@naver.com</p>
    </footer>
  );
};

export default Footer;