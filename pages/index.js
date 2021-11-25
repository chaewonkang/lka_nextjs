import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

const Index = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [thumbUrl, setThumbUrl] = useState('');
  const [flag, setFlag] = useState('');
  const [isKeyClicked, setIsKeyClicked] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <>
          <PageLayout>
            <div className='view_filter'>
              <div>Thumbnail</div>
              <div>List</div>
            </div>
            <div className='indexing'>
              <div className='header_container'>
                <div className='company_title'>
                  <div>Leehong Kim</div>
                  <div>Architects</div>
                </div>
                <div className='category'>
                  <div>Architecture</div>
                  <div>Conceptual</div>
                  <div>News</div>
                  <div>About</div>
                </div>
              </div>
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
                      <div>청라 더카운티 단독주택</div>
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
                      <div>서울도시건축비엔날레 2021 현장프로젝트 </div>
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
            </div>
          </PageLayout>
        </>
      )}
    </ThemeProvider>
  );
};

export default Index;
