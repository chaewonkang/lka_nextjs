import React, { useEffect, useRef, useState } from 'react';

const imagePath2 = [
  `/static/images/main_1.jpg`,
  `/static/images/main_2.jpg`,
  `/static/images/main_3.jpg`,
];

const labelPath1 = [
  `Expand your vision, Be ambitious!`,
  `한국외국어대학교 Language & Trade`,
  `Welcome to Division of Language & Trade`,
];

const delay = 2500;

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
              <span>{labelPath1[index]}</span>
              <img src={image}></img>
            </div>
          ))}
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
          margin: auto;
          overflow: hidden;
          max-width: 100vw;
          height: calc((100vh - 165px) / 2);
          max-height: calc((100vh - 165px) / 2);
          position: relative;
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
          height: calc(50vh - 85px);
          max-height: calc(50vh - 85px);
        }

        .slide > span {
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          height: 15%;
          display: flex;
          align-items: center;
          padding-left: 1.5em;
          font-size: 20px;
          color: #fff;
          font-family: 'HUFSM';
        }

        @media screen and (max-width: 770px) {
          .slideshow {
            margin: auto;
            overflow: hidden;
            max-width: 100vw;
            height: calc((100vh - 85px) / 2);
            max-height: calc((100vh - 85px) / 2);
            position: relative;
          }

          .slide {
            height: calc((100vh - 85px) / 2);
            max-height: calc((100vh - 85px) / 2);
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
          right: 1em;
        }

        .slideshowDot {
          display: inline-block;
          height: 8px;
          width: 8px;
          border-radius: 50%;

          cursor: pointer;
          margin: 15px 7px 0px;

          background-color: #c4c4c4;
        }

        .slideshowDot.active {
          background-color: #002d56;
        }
      `}</style>
    </>
  );
}

export default Slideshow;
