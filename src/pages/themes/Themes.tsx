import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Themes() {
  return (
    <Section>
      <BannerWrap>
        <BigBanner>
          <Desc className="desc">
            <h1>테마별 여행</h1>
            <h2>평범한 여행에 당신만의 테마를 입혀보세요.</h2>
          </Desc>
        </BigBanner>
      </BannerWrap>
      <ThemesListWrap className="themes-list">
        <ul className="list_wrap">
          <li>
            <Link to="culture">
              <span>문화탐방</span>
            </Link>
          </li>
          <li>
            <Link to="golf">
              <span>골프여행</span>
            </Link>
          </li>
          <li>
            <Link to="vacation">
              <span>휴양지</span>
            </Link>
          </li>
          <li>
            <Link to="trekking">
              <span>트레킹</span>
            </Link>
          </li>
          <li>
            <Link to="pilgrimage">
              <span>성지순례</span>
            </Link>
          </li>
          <li>
            <Link to="voluntour">
              <span>볼론투어</span>
            </Link>
          </li>
        </ul>
      </ThemesListWrap>
      <Outlet />
    </Section>
  );
}

export default Themes;

const Section = styled.section`
  * {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: #000;
  }
  width: 100%;
  span {
    font-size: 16px;
  }
`;

const BannerWrap = styled.div`
  margin: 0 auto;
  width: 1920px;
  height: 608px;
  overflow: hidden;
`;
const BigBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(/img/bigBanner_3.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  /* background-attachment: fixed; */
`;

const Desc = styled.div`
  position: absolute;
  top: 110px;
  left: 273px;
  color: #fff;
  h1 {
    margin-bottom: 26px;
    font-weight: 600;
    font-size: 80px;
    line-height: 97px;
  }
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
  }
`;

const ThemesListWrap = styled.div`
  border-bottom: 3px solid #0080c6;
  .list_wrap {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 98px 100px;
    width: 1920px;
    box-sizing: border-box;
    li {
      a {
        span {
          font-weight: 700;
          font-size: 50px;
          line-height: 61px;
        }
      }
    }
  }
`;
