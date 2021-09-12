import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';
import contactBg from '../static/images/contact_bg.png';

const iconObj = [
  '../static/images/icon_1.png',
  '../static/images/icon_2.png',
  '../static/images/icon_3.png',
  '../static/images/icon_4.png',
];

const bannerObj = {
  img: banner,
  title: '회사개요',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
};

const Contact = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='contact_container'>
          <img src={contactBg}></img>
          <div className='contact_card'>
            <div className='contact_card_title'>
              <h1>Contact Us</h1>
              <p>
                Are you worried about logistics and price competitiveness in
                handling Korean cosmetics? If you need a partner that can grow
                together with you, contact us right now.{' '}
              </p>
            </div>
            <div className='contact_row'>
              <div className='contact_row_item'>
                <div className='contact_row_icon'>
                  <img src={iconObj[0]}></img>
                </div>
                <div className='contact_row_info'>
                  <span>Address</span>
                  <p>
                    10874 #38, Hermann House02, 134, Chaekhyanggisup-gil,
                    Paju-Si, Gyeonggi-do, Korea
                  </p>
                </div>
              </div>
              <div className='contact_row_item'>
                <div className='contact_row_icon'>
                  <img src={iconObj[1]}></img>
                </div>
                <div className='contact_row_info'>
                  <span>E-mail</span>
                  <p>Businesschannel@naver.com</p>
                </div>
              </div>
              <div className='contact_row_item'>
                <div className='contact_row_icon'>
                  <img
                    src={iconObj[2]}
                    style={{ width: '70%', paddingLeft: '5px' }}
                  ></img>
                </div>
                <div className='contact_row_info'>
                  <span>Business Phone</span>
                  <p>+82 010-5115-5799</p>
                </div>
              </div>
              <div className='contact_row_item'>
                <div className='contact_row_icon'>
                  <img src={iconObj[3]}></img>
                </div>
                <div className='contact_row_info'>
                  <span>Working Hours</span>
                  <p>
                    Monday to Friday : 10:00~19:00 / OFF : Sat, Sun, Hoildays{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Contact;
