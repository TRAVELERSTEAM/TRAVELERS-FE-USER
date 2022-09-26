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
  return (
    <section>
      <SlideWrap className="tslide-wrap">
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
    </section>
  );
}

export default MainPage;

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
