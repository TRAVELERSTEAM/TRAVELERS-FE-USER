import React from 'react';
import styled from 'styled-components';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import Banner01 from '/banner01.svg';
// import Banner02 from '/banner02.svg';
// import Banner03 from '/banner03.svg';
import TypeTest from '/banner_type-test.svg';
import AiRecommend from '/banner_ai-recommend.svg';

function MainPage() {
  const count = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return (
    <Section>
      <SlideWrap className="slide-wrap">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          className="mySwiper"
        >
          <SwiperSlide>
            <Img src={AiRecommend} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={TypeTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={AiRecommend} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={TypeTest} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={AiRecommend} alt="" />
          </SwiperSlide>
        </Swiper>
      </SlideWrap>
      <article className="group-list">
        <Inner>
          <h2>그룹별</h2>
          <div>
            <ul>
              <li>
                <a href="#">
                  <img src="" alt="" />
                  <span>5070끼리</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" alt="" />
                  <span>2040끼리</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" alt="" />
                  <span>남자끼리</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" alt="" />
                  <span>여자끼리</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="" alt="" />
                  <span>자녀동반</span>
                </a>
              </li>
            </ul>
          </div>
        </Inner>
      </article>
      <HotItemsWrap className="hot-items">
        <Inner>
          <h2>실시간 인기 상품</h2>
          <SlideWrap>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              speed={1000}
            >
              {count.map((_, index) => {
                return (
                  <SwiperSlide className="item">
                    <a href="#">
                      <div className="thumb">
                        <img src="" alt="" />
                        <span>{index + 1}</span>
                      </div>
                      <div className="desc">
                        <span className="title">타이틀타이틀타이틀타이틀타이틀</span>
                        <span className="price">{'1,000,000'} 원</span>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SlideWrap>
        </Inner>
      </HotItemsWrap>
    </Section>
  );
}

export default MainPage;

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

const Inner = styled.div`
  margin: 0 auto;
  width: 1360px;
  h2 {
    margin-bottom: 41px;
    font-weight: 700;
    font-size: 55px;
    line-height: 67px;
  }
`;
const SlideWrap = styled.div`
  .swiper-button-prev {
  }
  .swiper-button-next {
  }
  .swiper-pagination {
    bottom: 53px;
    .swiper-pagination-bullet {
      margin-right: 10px;
      width: 109px;
      height: 11px;
      background-color: #fff;
      border-radius: 5px;
      opacity: 1;
      &:last-child {
        margin-right: 0;
      }
    }
    .swiper-pagination-bullet-active {
      background-color: #000;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const HotItemsWrap = styled.article`
  margin-bottom: 240px;
  .item {
    a {
      .thumb {
        width: 440px;
        height: 291px;
        background-color: #ddd;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
        }
      }
      .desc {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 11px 26px;
        span {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
          text-align: center;
        }
        .title {
          margin-bottom: 30px;
        }
      }
    }
  }
`;
