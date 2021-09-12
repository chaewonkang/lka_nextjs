import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_2.png';
import { useRouter } from 'next/router';

const bannerObj = {
  img: banner,
  title: 'Distribution',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
  url: 'https://google.com',
};

const itemObj = [
  {
    img: banner,
    title: '화장품',
    category: '아모레퍼시픽 순플러스, 이너프프로젝트',
    description:
      '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획, 개발, 출하, 관리에 이르기까지 체계적인 토털서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
    url: 'https://google.com',
  },
  {
    img: banner,
    title: '제지류',
    category: '아모레퍼시픽 순플러스, 이너프프로젝트',
    description:
      '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획, 개발, 출하, 관리에 이르기까지 체계적인 토털서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
    url: 'https://google.com',
  },
  {
    img: banner,
    title: '생활용품',
    category: '아모레퍼시픽 순플러스, 이너프프로젝트',
    description:
      '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획, 개발, 출하, 관리에 이르기까지 체계적인 토털서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
    url: 'https://google.com',
  },
  {
    img: banner,
    title: '마스크공장',
    category: '아모레퍼시픽 순플러스, 이너프프로젝트',
    description:
      '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획, 개발, 출하, 관리에 이르기까지 체계적인 토털서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
    url: 'https://google.com',
  },
];

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
        <div className='dist_container'>
          {itemObj.map((item) => {
            return (
              <div className='dist_box'>
                <div className='img_wrapper'>
                  <img src={item.img}></img>
                </div>
                <div className='text_wrapper'>
                  <h1>{item.title}</h1>
                  <span>{item.category}</span>
                  <p>{item.description}</p>
                </div>
                <div className='detail_button'>
                  <a href={item.url} target='_blank'>
                    <span>상세설명</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
