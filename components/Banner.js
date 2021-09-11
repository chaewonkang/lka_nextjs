const Banner = ({ img, title, text }) => {
  return (
    <div className='banner_container'>
      <div className='banner_wrapper'>
        <img src='../static/images/banner_1.png'></img>
        <h1>회사개요</h1>
        <p>
          우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획, 개발,
          출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드
          기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
