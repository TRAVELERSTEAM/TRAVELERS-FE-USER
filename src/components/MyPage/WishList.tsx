import React, { useEffect, useState } from 'react';
import { getWishs } from '~/utils/wishStorage';
function WishList() {
  //FIXME 타입 처리
  const [wishLists, setWishLists] = useState(getWishs());

  const lists =
    (wishLists as string[]).length === 0 ? (
      <>찜한 상품이 없습니다</>
    ) : (
      (wishLists as string[]).map((item) => <p>{item}</p>)
    );

  useEffect(() => {
    console.log(setWishLists);
  }, [wishLists]);
  return (
    <>
      찜 목록
      <div>목록 = 메인 썸네일 컴포넌트</div>
      {lists}
    </>
  );
}

export default WishList;
