import mainBanner01 from 'src/assets/images/mainBanner/mainBanner01.png';
import mainBanner02 from 'src/assets/images/mainBanner/mainBanner02.png';
import mainBanner03 from 'src/assets/images/mainBanner/mainBanner03.png';

type Banner = {
  link: string;
  src: string;
  alt: string;
};

const banners: Banner[] = [
  { link: "#", src: mainBanner01, alt: "메인 배너 1" },
  { link: "#", src: mainBanner02, alt: "메인 배너 2" },
  { link: "#", src: mainBanner03, alt: "메인 배너 3" }
];

export default banners;