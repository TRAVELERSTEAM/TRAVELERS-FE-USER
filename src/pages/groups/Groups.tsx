import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Groups() {
  return (
    <Section>
      <BannerWrap>
        <BigBanner>
          <Desc className="desc">
            <h1>그룹별 여행</h1>
            <h2>나에게 맞는 그룹을 찾아보세요!</h2>
          </Desc>
        </BigBanner>
      </BannerWrap>
      <GroupListWrap className="group-list">
        <ul className="list_wrap">
          <li>
            <Link to="/groups/5070">
              <span>5070끼리</span>
            </Link>
          </li>
          <li>
            <Link to="/groups/2040">
              <span>2040끼리</span>
            </Link>
          </li>
          <li>
            <Link to="/groups/gentlemen">
              <span>남자끼리</span>
            </Link>
          </li>
          <li>
            <Link to="/groups/ladies">
              <span>여자끼리</span>
            </Link>
          </li>
          <li>
            <Link to="/groups/withchild">
              <span>자녀동반</span>
            </Link>
          </li>
          <li>
            <Link to="/groups/anyone">
              <span>누구든지</span>
            </Link>
          </li>
        </ul>
      </GroupListWrap>
      <Outlet />
    </Section>
  );
}

export default Groups;

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
  background-image: url(/img/bigBanner_1.jpg);
  background-repeat: no-repeat;
  background-position: center -80px;
  background-size: 100%;
  background-attachment: fixed;
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

const GroupListWrap = styled.div`
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
