import React from 'react';
import styled from 'styled-components';
import MyPageReservation from '../components/MyPageReservation';
import MyPageWishList from '../components/MyPageWishList';
import MyPageDeleteAccount from '../components/MyPageDeleteAccount';

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
      <MyPageReservation></MyPageReservation>
      <MyPageWishList></MyPageWishList>
      <MyPageDeleteAccount></MyPageDeleteAccount>
    </StyledMyPage>
  );
}

export default MyPage;
const StyledMyPage = styled.div``;
const StyledMyPageList = styled.div``;
