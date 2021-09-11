import React, { useEffect, useRef, useState } from 'react';

const imagePath2 = [
  `/static/images/main_1.png`,
  `/static/images/main_2.png`,
  `/static/images/main_3.png`,
];

const delay = 3000;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagePath2.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className='slideshow'>
        <div
          className='slideshowSlider'
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imagePath2.map((image, index) => (
            <div className='slide' key={index}>
              <img src={image}></img>
            </div>
          ))}
        </div>

        <div className='floatText'>
          <span>비지니스 채널은 국내 화장품 업계 최초의 ODM 기업입니다</span>
          <p>
            우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획, 개발,
            출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다
          </p>
          <p>
            브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록
            지원합니다
          </p>
        </div>

        <div className='slideshowDots'>
          {imagePath2.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .slideshow {
          z-index: 2;
          margin: auto;
          overflow: hidden;
          max-width: 100vw;
          height: 100vh;
          max-height: 100vh;
          position: absolute;
          top: 0;
        }

        .slideshowSlider {
          white-space: nowrap;
          transition: ease 1000ms;
          height: 50%;
          max-height: 50%;
        }

        .slide {
          display: inline-block;
          object-fit: cover;
          width: 100%;
          position: relative;
          margin: 0;
          height: 100vh;
          max-height: 100vh;
        }

        .slide > span {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 15%;
          display: flex;
          align-items: center;
          padding-left: 1.5em;
          font-size: 20px;
          color: #fff;
        }

        @media screen and (max-width: 770px) {
          .slideshow {
            margin: auto;
            overflow: hidden;
            max-width: 100vw;
            height: calc(100vh - 85px);
            max-height: calc(100vh - 85px);
            position: relative;
          }

          .slide {
            height: calc(100vh - 85px);
            max-height: calc(100vh - 85px);
          }

          .slide > span {
            font-size: 0.75em;
          }
        }

        .slide > img {
          width: 100%;
          height: inherit;
          object-fit: cover;
          margin: auto;
        }

        /* Buttons */
        .slide_label {
          text-align: center;
          position: absolute;
          bottom: 20px;
          left: 50%;
        }

        .slideshowDots {
          text-align: center;
          position: absolute;
          bottom: 1em;
          right: calc(50% - 36px);
        }

        .slideshowDot {
          display: inline-block;
          height: 9px;
          width: 9px;
          border-radius: 50%;

          cursor: pointer;
          margin: 15px 7px 0px;

          background-color: #c4c4c4;
        }

        .slideshowDot.active {
          background-color: #fff;
        }
      `}</style>
    </>
  );
}

export default Slideshow;
