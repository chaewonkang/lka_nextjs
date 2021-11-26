import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

const imgArr = [
  '../static/images/img_1.png',
  '../static/images/img_2.png',
  '../static/images/img_3.png',
  '../static/images/img_4.png',
  '../static/images/img_5.png',
  '../static/images/img_6.png',
  '../static/images/img_7.png',
];

const Index = () => {
  const [thumbIdx, setThumbIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('list');
  const [thumbTop, setThumbTop] = useState('');

  useEffect(() => {}, [thumbIdx, viewMode]);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <>
          <PageLayout>
            <div
              className='thumb_container'
              style={thumbIdx === 0 ? { display: 'none' } : null}
            >
              <img src={imgArr[thumbIdx]}></img>
            </div>
            <div
              className='mobile_thumb_container'
              style={{ top: `${thumbIdx * 26 + 155}px` }}
            >
              <img src={imgArr[thumbIdx]}></img>
            </div>
            <div
              className='indexing'
              style={
                viewMode === 'thumbnail' ? { flexDirection: 'column' } : null
              }
            >
              <div className='header_container'>
                <div className='company_title'>
                  <div>Leehong Kim</div>
                  <div>Architects</div>
                </div>
                <div className='category'>
                  <div>Architecture</div>
                  <div>Conceptual</div>
                  <div>News</div>
                  <Link href='/about'>
                    <div>About</div>
                  </Link>
                </div>
              </div>
              <div className='view_filter'>
                <div onClick={() => setViewMode('thumbnail')}>Thumbnail</div>
                <div onClick={() => setViewMode('list')}>List</div>
              </div>
              {viewMode === 'list' ? (
                <div className='header_sub_container'>
                  <div className='header_sub_menu'>
                    <div className='project'>
                      <div>Project</div>
                    </div>
                    <div className='year'>
                      <div>Year</div>
                    </div>
                    <div className='program'>
                      <div>Program</div>
                    </div>
                  </div>
                  <div className='content_index'>
                    <div
                      className='index_row'
                      onMouseOver={() => {
                        setThumbIdx(1);
                        console.log(thumbIdx);
                      }}
                      onMouseLeave={() => {
                        setThumbIdx(0);
                        console.log(thumbIdx);
                      }}
                    >
                      <div className='project'>
                        <div>
                          현대백화점 본점 주차장캐노피
                          <span className='more_button'>More ▶︎</span>
                        </div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div
                      className='index_row'
                      onMouseOver={() => {
                        setThumbIdx(2);
                        console.log(thumbIdx);
                      }}
                      onMouseLeave={() => {
                        setThumbIdx(0);
                        console.log(thumbIdx);
                      }}
                    >
                      <div className='project'>
                        <div>청라 더카운티 단독주택</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div
                      className='index_row'
                      onMouseOver={() => {
                        setThumbIdx(3);
                        console.log(thumbIdx);
                      }}
                      onMouseLeave={() => {
                        setThumbIdx(0);
                        console.log(thumbIdx);
                      }}
                    >
                      <div className='project'>
                        <div>서울도시건축비엔날레 2021 현장프로젝트 </div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div
                      className='index_row'
                      onMouseOver={() => {
                        setThumbIdx(4);
                        console.log(thumbIdx);
                      }}
                      onMouseLeave={() => {
                        setThumbIdx(0);
                        console.log(thumbIdx);
                      }}
                    >
                      <div className='project'>
                        <div>현대백화점 본점 주차장캐노피</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div
                      className='index_row'
                      onMouseOver={() => {
                        setThumbIdx(5);
                        console.log(thumbIdx);
                      }}
                      onMouseLeave={() => {
                        setThumbIdx(0);
                        console.log(thumbIdx);
                      }}
                    >
                      <div className='project'>
                        <div>현대백화점 본점 주차장캐노피</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div
                      className='index_row'
                      onMouseOver={() => {
                        setThumbIdx(6);
                        console.log(thumbIdx);
                      }}
                      onMouseLeave={() => {
                        setThumbIdx(0);
                        console.log(thumbIdx);
                      }}
                    >
                      <div className='project'>
                        <div>현대백화점 본점 주차장캐노피</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div className='index_row'>
                      <div className='project'>
                        <div>현대백화점 본점 주차장캐노피</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div className='index_row'>
                      <div className='project'>
                        <div>현대백화점 본점 주차장캐노피</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                    <div className='index_row'>
                      <div className='project'>
                        <div>현대백화점 본점 주차장캐노피</div>
                      </div>
                      <div className='year'>
                        <div>Ongoing</div>
                      </div>
                      <div className='program'>
                        <div>Public</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='thumbnail_gallery'>
                  {imgArr.map((el) => {
                    return (
                      <div>
                        <img src={el}></img>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </PageLayout>
        </>
      )}
    </ThemeProvider>
  );
};

export default Index;
