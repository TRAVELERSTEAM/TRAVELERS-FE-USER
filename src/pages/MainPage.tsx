import React from 'react';
import styled from 'styled-components';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TypeTest from '/banner_type-test.svg';
import AiRecommend from '/banner_ai-recommend.svg';

function MainPage() {
  const testarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
      <GroupListWrap className="group-list">
        <Inner>
          <h2>그룹별</h2>
          <div>
            <ul className="list">
              <li className="item">
                <a href="#">
                  <div>
                    <img src="/5070_icon.png" alt="5070끼리" />
                  </div>
                  <span className="item-title">5070끼리</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <div>
                    <img src="/2040_icon.png" alt="2040끼리" />
                  </div>
                  <span className="item-title">2040끼리</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <div>
                    <img src="/gentlemen_icon.png" alt="남자끼리" />
                  </div>
                  <span className="item-title">남자끼리</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <div>
                    <img src="ladies_icon.png" alt="여자끼리" />
                  </div>
                  <span className="item-title">여자끼리</span>
                </a>
              </li>
              <li className="item">
                <a href="#">
                  <div>
                    <img src="/withchild_icon.png" alt="자녀동반" />
                  </div>
                  <span className="item-title">자녀동반</span>
                </a>
              </li>
            </ul>
          </div>
        </Inner>
      </GroupListWrap>
      <HotItemsWrap className="hot-items">
        <Inner>
          <h2>실시간 인기 상품</h2>
          <ArticleSlideWrap>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={3}
              navigation={true}
              modules={[Navigation]}
              speed={1000}
            >
              {testarr.map((_, index) => {
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
          </ArticleSlideWrap>
        </Inner>
      </HotItemsWrap>
      <DestinationWrap className="destination-items">
        <Inner>
          <h2>지역별 상품</h2>
          <ArticleSlideWrap>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={3}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              speed={1000}
            >
              {testarr.map((_, index) => {
                return (
                  <SwiperSlide className="item">
                    <a href="#">
                      <div className="thumb">
                        <img src="" alt="" />
                        <span>{index + 1}</span>
                      </div>
                      <div className="desc">
                        <span className="title">타이틀타이틀</span>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ArticleSlideWrap>
        </Inner>
      </DestinationWrap>
      <ThemeWrap className="theme-items">
        <Inner>
          <h2>테마별 상품</h2>
          <ArticleSlideWrap>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={3}
              loopFillGroupWithBlank={true}
              navigation={true}
              modules={[Navigation]}
              speed={1000}
            >
              {testarr.map((_, index) => {
                return (
                  <SwiperSlide className="item">
                    <a href="#">
                      <div className="thumb">
                        <img src="" alt="" />
                        <span>{index + 1}</span>
                      </div>
                      <div className="desc">
                        <span className="title">타이틀타이틀</span>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ArticleSlideWrap>
        </Inner>
      </ThemeWrap>
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
  .swiper {
    margin: 0 auto;
    width: 1920px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 40%;
    padding: 44px 20px;
    width: 90px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #afafaf;
    border-radius: 50%;
  }
  .swiper-button-prev::after {
    content: url('/arrow_left.svg');
  }
  .swiper-button-next::after {
    content: url('/arrow_right.svg');
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
  }
  .swiper-button-prev {
    left: 71px;
  }
  .swiper-button-next {
    right: 71px;
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

const ArticleSlideWrap = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    width: 90px;
    height: 100%;
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    background-color: rgba(217, 217, 217, 0.5);
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-disabled {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const GroupListWrap = styled.div`
  margin: 118px 0 240px 0;

  .list {
    display: flex;
    .item {
      margin-right: 40px;
      &:last-child {
        margin-right: 0;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 240px;
          height: 240px;
          border: 1px solid #000000;
          border-radius: 10px;
          box-sizing: border-box;
        }
        .item-title {
          padding-top: 20px;
          font-weight: 500;
          font-size: 40px;
          line-height: 48px;
        }
      }
    }
  }
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
        border: 2px solid #d9d9d9;
        box-sizing: border-box;
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

const DestinationWrap = styled.article`
  margin-bottom: 220px;
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
        padding: 122px 92px;
        border: 2px solid #d9d9d9;
        box-sizing: border-box;
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

const ThemeWrap = styled.article`
  margin-bottom: 550px;
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
        padding: 122px 92px;
        border: 2px solid #d9d9d9;
        box-sizing: border-box;
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
