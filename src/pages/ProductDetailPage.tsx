import React from 'react';
import Calendar from '~/components/Calendar';

function ProductDetailPage() {
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
      <button>찜하기</button>
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
