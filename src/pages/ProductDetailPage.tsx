import React from 'react';
import Calendar from '~/components/Calendar';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { hasWish, addWish, removeWish } from '../utils/wishStorage';

function ProductDetailPage() {
  // 이후 useParams로 받을 생각
  // const { id } = useParams();
  // const [productId, setProductId] = useState('');

  const onAddWishList = (testId: string) => {
    hasWish(testId) ? removeWish(testId) : addWish(testId);
  };

  return (
    <div>
      <p>상품 배너이미지</p>
      <p>타겟</p>
      <p>제품명</p>
      <p>가격</p>
      <p>내용</p>
      {/* 이미지들 */}
      <p>아이콘들4개</p>
      <Calendar />
      <button>신청하기</button>
      <button onClick={() => onAddWishList('1')}>찜하기</button>
      <ul>
        <li>img1</li>
        <li>img2</li>
        <li>img3</li>
        <li>img4</li>
      </ul>
    </div>
  );
}

export default ProductDetailPage;
