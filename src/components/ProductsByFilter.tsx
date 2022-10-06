import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import ProductCardLayout from './ProductCardLayout';

function ProductsByFilter() {
  const testArr = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const id = useOutletContext();
  return (
    <article className="product_area">
      <ProductWrap>
        {testArr.map(() => {
          return (
            <>
              <ProductCardLayout
                thumb="asdf"
                title={`${id} 2040 브라질 골프 투어 30일`}
                price="2500000"
              />
            </>
          );
        })}
      </ProductWrap>
    </article>
  );
}

export default ProductsByFilter;

const ProductWrap = styled.article`
  margin: 0 auto;
  padding: 220px 0;
  width: 1410px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 45px;
  grid-row-gap: 200px;
`;
