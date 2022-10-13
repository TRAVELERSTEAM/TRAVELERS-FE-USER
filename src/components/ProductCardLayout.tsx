import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  thumb: string;
  title: string;
  price: string;
}
function ProductCardLayout({ thumb, title, price }: ProductCardProps) {
  return (
    <Wrap>
      <a href="#">
        <div className="thumb">
          <img src={thumb} alt={`${title} 썸네일`} />
        </div>
        <div className="desc">
          <span className="title">{title}</span>
          <span className="price">{Number(price).toLocaleString()} 원</span>
        </div>
      </a>
    </Wrap>
  );
}

export default ProductCardLayout;

const Wrap = styled.div`
  width: 440px;
  height: 486px;
  a {
    .thumb {
      width: 100%;
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
      padding: 11px 16px;
      border: 2px solid #d9d9d9;
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
`;
