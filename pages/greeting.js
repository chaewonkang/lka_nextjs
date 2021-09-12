import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';
import signature from '../static/images/signature.png';

const bannerObj = {
  img: banner,
  title: '회사개요',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
};

const Company = () => {
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
        <div className='greeting_container'>
          <div className='greeting_wrapper'>
            <h1>
              창의적인 아이디어를 통해 <br />
              새로운 가치를 만들어 갑니다.
            </h1>
            <span>여러분 안녕하십니까?</span>
            <p>
              비지니스채널은 1998년 창사 아래 부동산 개발 및 금융 분야에서
              새로운 시각과 선구자적 정신을 가지고 시장의 발전을 위해 노력하여
              왔습니다. 저희 비지니스채널은 “고객이 진정으로 원하는 것은
              무엇인가” 라는 질문으로 모든 프로젝트를 시작합니다. 소비자의
              Needs가 무엇인지를 정확히 분석하고 이를 바탕으로 고객이 만족할 수
              있는 가치를 창조하는 것만이 모든 사업을 성공적으로 완수할 수
              있다는 확신 때문입니다. 저희는 업계 최초의 종합 부동산 금융
              그룹으로서, 기획, 설계, 마케팅 등의 부동산 개발 분야와 신탁, 리츠,
              캐피탈, 자산운용 등의 부동산 금융 분야 전문가가 상호간에 긴밀히
              협력하고 있으며, 이를 통하여 급변하는 부동산 시장 속에서도
              성공적인 프로젝트가 수행될 수 있도록 최상의 솔루션을
              제시하겠습니다. 또한 부동산의 가치 창조뿐만 아니라, 사회가 함께
              행복할 수 있는 가치를 목표로 더욱 더 노력할 것입니다.
            </p>
          </div>
          <div className='greeting_signature'>
            <span>비즈니스 채널 대표</span>
            <img src={signature}></img>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
