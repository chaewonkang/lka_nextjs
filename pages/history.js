import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';
import historyContentKr from '../constants/historyContentKr';

const bannerObj = {
  img: banner,
  title: '회사개요',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
};

const History = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Banner
          img={bannerObj.img}
          title={bannerObj.title}
          text={bannerObj.text}
        ></Banner>
        <div className='history_container'>
          <div className='history_title_wrapper'>
            <h1>
              비즈니스채널은 오늘도 <br />
              위대한 역사를 만들고 있습니다.
            </h1>
          </div>
          <div className='history_table'></div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default History;
