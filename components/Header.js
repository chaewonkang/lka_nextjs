import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import logoB from '../static/images/blue_logo.png';
import globe from '../static/images/globe.png';

const HeaderContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  width: 100vw;
  height: 80px;
  flex-direction: row;
  font-size: 15px;
  color: #fff;
  padding-right: 50px;
  padding-left: 50px;

  background-size: 50vw;
  object-fit: cover;

  &:hover {
    background-color: rgba(48, 116, 189, 1);
  }

  @media ${(props) => props.theme.mobile} {
    background-color: #fff;
  }
`;

const HeaderMobileMenu = styled.div`
  display: none;

  @media screen and ${(props) => props.theme.mobile} {
    & {
      display: flex;
      align-self: center;
      justify-self: center;
      cursor: pointer;
    }

    & > div > div {
      width: 30px;
      height: 2px;
      background-color: black;
      margin: 6px 0;
    }
  }
`;

const HeaderLogoContainer = styled.div`
  width: 400px;
  min-width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;

  & > img {
    height: 40px;
    cursor: pointer;
    max-width: 100%;
  }

  @media screen and (min-width: 770px) and (max-width: 1023px) {
    display: flex;
    width: 300px;
    min-width: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: calc(100% - 100px);
    min-width: calc(100% - 50px);

    align-items: center;

    & > img {
      height: 40px;
      cursor: pointer;
    }
  }
`;

const HeaderMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 50px;

  width: 100%;

  & > .dropdown {
    margin-right: 1em;
    position: relative;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &:hover {
    }
  }

  & > .dropdown:hover .dropdown-content {
    display: block;
  }

  & > .dropdown > .dropdown-content {
    display: none;
    position: absolute;
    top: 80px;
    left: -10px;
    background-color: rgba(255, 255, 255, 0.7);
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;

    font-size: 15px;
  }

  & > .dropdown > .dropdown-content > a {
    display: block;
    padding-top: 0.5em;
    padding-bottom: 0.5em;

    &:hover {
      text-decoration: none;
      display: flex;
    }
  }

  @media screen and (min-width: 770px) and (max-width: 1023px) {
    & > .dropdown {
      margin-right: 1em;
      position: relative;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 13px;

      &:hover {
      }
    }

    & > .dropdown:hover .dropdown-content {
      display: block;
    }

    & > .dropdown > .dropdown-content {
      display: none;
      position: absolute;
      top: 80px;
      left: -10px;
      background-color: rgba(255, 255, 255, 0.7);
      min-width: 80px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;

      font-size: 13px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    & {
      display: none;
    }
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  background-color: #fff !important;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    background: #002d56;
    height: 0.18rem;
    border-radius: 0px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.8px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.nav`
  display: inline-block;
  width: 100vw;
  z-index: 10;
  background: #002d56;
  opacity: 0.9;
  height: 100vh;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0;
  position: absolute;
  top: 80px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  & > div {
    padding-bottom: 0.5em;
  }

  & > div > span {
    font-size: 18px;
    margin-bottom: 0.5em;
    padding: 0.5em;
    color: #fff;
    display: block;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  & > div > a {
    text-transform: uppercase;
    display: block;
    padding: 0.25em;

    margin-bottom: 0.5em;
    color: #fff;
    font-family: 'HUFSL';
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 18px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const link1 = [
    '/introduce/',
    '/introduce/goal/',
    '/introduce/prospect/',
    '/introduce/direction/',
  ];
  const link2 = ['/professor-list/'];
  const link3 = ['/study/roadmap/', '/study/curriculum/'];
  const link4 = ['/study/student-union/'];
  const link5 = [
    '/board-list/general/',
    '/board-list/college/',
    '/board-list/free/',
    '/board-list/filebox/',
  ];

  const handleClick = (e, path) => {
    console.log('handleClick');
    console.log('path');
    console.log(path);
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link href='/'>
          <img src={logoB}></img>
        </Link>
      </HeaderLogoContainer>
      <HeaderMobileMenu>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <StyledMenu open={open} setOpen={setOpen}>
          <div>
            <Link href='/introduce/'>
              <span>COMPANY</span>
            </Link>
            {/*
            handleClick(e, '/introduce/direction/' ) */}
            <Link href='/introduce/'>
              <a onClick={() => setOpen(!open)}>회사개요</a>
            </Link>
            <Link href='/introduce/goal/'>
              <a onClick={() => setOpen(!open)}>인사말</a>
            </Link>
            <Link href='/introduce/prospect/'>
              <a onClick={() => setOpen(!open)}>연혁</a>
            </Link>
            <Link href='/introduce/direction/'>
              <a onClick={() => setOpen(!open)}>오시는길</a>
            </Link>
          </div>
          <div>
            <Link href='/professor-list/'>
              <span>BUSINESS</span>
            </Link>
            <Link href='/professor-list/'>
              <a onClick={() => setOpen(false)}>교수진</a>
            </Link>
          </div>
          <div>
            <Link href='/study/student-union/'>
              <span>DISTRIBUTION</span>
            </Link>
            <Link href='/study/student-union/'>
              <a onClick={() => setOpen(false)}>학생회</a>
            </Link>
          </div>
          <div>
            <Link href='/board-list/general/'>
              <span>CONTACT</span>
            </Link>
            <Link href='/board-list/general/'>
              <a onClick={(e) => handleClick(e, '/board-list/general/')}>
                일반공지사항
              </a>
            </Link>
            <Link href='/board-list/college/'>
              <a onClick={(e) => handleClick(e, '/board-list/college/')}>
                학사관련공지사항
              </a>
            </Link>
            <Link href='/board-list/free/'>
              <a onClick={(e) => handleClick(e, '/board-list/free/')}>
                자유게시판
              </a>
            </Link>
            <Link href='/board-list/filebox/'>
              <a onClick={(e) => handleClick(e, '/board-list/filebox/')}>
                자료실
              </a>
            </Link>
          </div>
        </StyledMenu>
      </HeaderMobileMenu>
      <HeaderMenuContainer>
        <div className='dropdown'>
          <Link href='/company/'>
            <span>COMPANY</span>
          </Link>
        </div>
        <div className='dropdown'>
          <Link href='/professor-list/'>
            <span>BUSINESS</span>
          </Link>
          <div className='dropdown-content'>
            <Link href='/professor-list/'>
              <a onClick={() => setOpen(false)}>교수진</a>
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link href='/study/roadmap/'>
            <span>DISTRIBUTION</span>
          </Link>
          <div className='dropdown-content'>
            <Link href='/study/roadmap/'>
              <a onClick={() => setOpen(false)}>전공로드맵</a>
            </Link>
            <Link href='/study/curriculum/'>
              <a onClick={() => setOpen(false)}>교과과정</a>
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link href='/study/student-union/'>
            <span>CONTACT</span>
          </Link>
          <div className='dropdown-content'>
            <Link href='/study/student-union/'>
              <a onClick={() => setOpen(false)}>학생회</a>
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link href='/study/student-union/'>
            <span>
              <img src={globe} style={{ height: '20px' }}></img>
            </span>
          </Link>
          <div className='dropdown-content'>
            <Link href='/study/student-union/'>
              <a onClick={() => setOpen(false)}>EN</a>
            </Link>
            <Link href='/study/student-union/'>
              <a onClick={() => setOpen(false)}>KR</a>
            </Link>
          </div>
        </div>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
