import React from 'react';
import styled from 'styled-components';
// import Reservation from '~/components/MyPage/Reservation';
// import WishList from '~/components/MyPage/WishList';
// import DeleteAccount from '~/components/MyPage/DeleteAccount';

const StyledMyPage = styled.div``;
const StyledMyPageList = styled.div``;

function MyPage() {
  return (
    <StyledMyPage>
      <StyledMyPageList>
        <p>내 정보</p>
        <p>예약 및 취소 조회</p>
        <p>찜 목록</p>
        <p>1:1 문의</p>
        <p>정보 수정</p>
        <p>회원 탈퇴</p>
      </StyledMyPageList>
    </StyledMyPage>
  );
}

export default MyPage;
