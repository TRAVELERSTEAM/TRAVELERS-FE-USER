import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductCardLayout from '~/components/ProductCardLayout';

function Destination() {
  const testArr = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const { id } = useParams();
  return (
    <Section>
      <BannerWrap>
        <BigBanner>
          <Desc className="desc">
            <h1>지역별 여행</h1>
            <h2>가고싶은 곳이면 갈 수 있습니다. 어디라도요!</h2>
          </Desc>
        </BigBanner>
      </BannerWrap>
      <DestinationListWrap className="destination-list">
        <ul className="list_wrap">
          <li>
            <Link to="/destination/asia">
              <span>동남아/태평양</span>
            </Link>
          </li>
          <li>
            <Link to="/destination/india">
              <span>인도/중앙아시아</span>
            </Link>
          </li>
          <li>
            <Link to="/destination/africa">
              <span>아프리카/중동</span>
            </Link>
          </li>
          <li>
            <Link to="/destination/europe">
              <span>유럽/코카서스</span>
            </Link>
          </li>
          <li>
            <Link to="/destination/america">
              <span>중남미/북미</span>
            </Link>
          </li>
          <li>
            <Link to="/destination/se-asia">
              <span>대만/중국/일본</span>
            </Link>
          </li>
        </ul>
      </DestinationListWrap>
      <Outlet context={id} />
      <article className="product_area">
        <ProductWrap>
          {testArr.map(() => {
            return (
              <>
                <ProductCardLayout thumb="asasdf" title="5070 태국 왕실 관람 4일" price="1500000" />
              </>
            );
          })}
        </ProductWrap>
      </article>
    </Section>
  );
}

export default Destination;

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
  background-image: url(/img/bigBanner_2.jpg);
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

const DestinationListWrap = styled.div`
  border-bottom: 3px solid #0080c6;
  .list_wrap {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 103px 12px;
    width: 1920px;
    box-sizing: border-box;
    li {
      a {
        span {
          font-weight: 700;
          font-size: 42px;
          line-height: 51px;
        }
      }
    }
  }
`;

const ProductWrap = styled.article`
  margin: 0 auto;
  padding: 220px 0;
  width: 1410px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 200px;
`;
