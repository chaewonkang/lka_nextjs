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

const Business = () => {
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
        <div className='organization_container'>
          <div className='text_wrapper'>
            <h1>경영이념</h1>
            <span>
              고객이 최고로 만족할 품질과 가격의 제품만을 개발하고 공급한다
            </span>
          </div>
        </div>
        <div className='history_container'>
          <div className='history_title_wrapper'>
            <h1>취급 브랜드</h1>
          </div>
          <div className='history_table'>
            {historyContentKr.map((item, index) => {})}
          </div>
        </div>
        <div className='organization_container'>
          <div className='organization_title_wrapper'>
            <h1>Organization</h1>
          </div>
          <div>
            <h1 className='level-1 rectangle'>비즈니스채널</h1>
            <ol className='level-2-wrapper'>
              <li>
                <ol className='level-3-wrapper'>
                  <li>
                    <h3 className='level-3 rectangle'>Tokyo</h3>
                    <ol className='level-4-wrapper'>
                      <li>
                        <h4 className='level-4 rectangle'>
                          쯔루하드럭, 후지약품 한화재팬 등 관동지역 거래선 총괄
                          관리.
                        </h4>
                      </li>
                      <li>
                        <h4 className='level-4 rectangle'>
                          진로재팬과 업무제휴, 진로재팬의 전국영업 망을 이용한
                          잡화류 판매에 주력.
                        </h4>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>Okinawa</h3>
                    <ol className='level-4-wrapper'>
                      <li>
                        <h4 className='level-4 rectangle'>
                          주식회사 AXE Japan 및 요로즈야 등의 법인 을 설립.
                        </h4>
                      </li>
                      <li>
                        <h4 className='level-4 rectangle'>
                          오키나와 및 후쿠오카, 간사이 지역의 거래선을 총괄관리.
                        </h4>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <ol className='level-3-wrapper'>
                  <li>
                    <h3 className='level-3 rectangle'>Guangzhou</h3>
                    <ol className='level-4-wrapper'>
                      <li>
                        <h4 className='level-4 rectangle'>
                          밸류트리 트레이딩 C&G 글로벌을 설립.
                        </h4>
                      </li>
                      <li>
                        <h4 className='level-4 rectangle'>
                          중국 및 홍콩의 제품 소싱 및 출하, 품질 전반을 총괄
                          관리.
                        </h4>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>Korea</h3>
                    <ol className='level-4-wrapper'>
                      <li>
                        <h4 className='level-4 rectangle'>
                          주식회사 비즈니스 채널 총괄하에 명경통상에서 한국내
                          유통 및 수출입 업무 전반을 관리.
                        </h4>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        <div className='organization_container'>
          <div>
            <h1 className='level-1 rectangle'>국내 조직</h1>
            <ol className='level-2-wrapper'>
              <li>
                <ol className='level-3-wrapper'>
                  <li>
                    <h3 className='level-3 rectangle'>전자상거래</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>Retail Sales</h3>
                  </li>
                </ol>
              </li>
              <li>
                <ol className='level-3-wrapper'>
                  <li>
                    <h3 className='level-3 rectangle'>관리</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>수입/수출</h3>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        <div className='history_container'>
          <div className='history_title_wrapper'>
            <h1>Business</h1>
          </div>
          <div className='history_table'>
            {historyContentKr.map((item, index) => {})}
          </div>
        </div>
        <div className='organization_container'>
          <div className='organization_title_wrapper'>
            <h1>Overseas Distribution</h1>
          </div>
          <div>
            <h1 className='level-1 rectangle'>Japan Network Firm</h1>
            <ol className='level-2-wrapper level-2-wrapper-true'>
              <li>
                <h2 className='level-2 rectangle'>일본 본토 영업</h2>
                <ol className='level-3-wrapper'>
                  <li>
                    <h3 className='level-3 rectangle'>KOSMOS(약 600점포)</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>CAINZ(약 600점포)</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>쯔루하(약 2,000점포)</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>
                      후지약품그룹 (약 1,000점포)
                    </h3>
                  </li>
                </ol>
              </li>
              <li>
                <h2 className='level-2 rectangle'>오키나와 영업</h2>
                <ol className='level-3-wrapper'>
                  <li>
                    <h3 className='level-3 rectangle'>KANEHIDE (65점포)</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>UNION (20점포)</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>SAN-A (70점포)</h3>
                  </li>
                  <li>
                    <h3 className='level-3 rectangle'>AEON GROUP (40점포)</h3>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
        <div className='organization_container'>
          <div className='text_wrapper'>
            <h1>Global Sales Network</h1>
            <span>현재 일본, 중국, 홍콩, 미국(신규), 호주(신규) 개척 중</span>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Business;
