import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
// import Reservation from '~/components/MyPage/Reservation';
// import WishList from '~/components/MyPage/WishList';
// import DeleteAccount from '~/components/MyPage/DeleteAccount';

function MyPage() {
  return (
    <>
      <Container>
        <Page>
          <Inner>
            <Menu>
              <Link to="" className="nav-list">
                내 정보
              </Link>
              <p className="nav-list">예약 및 취소 조회</p>
              <p className="nav-list">찜 목록</p>
              <Link to="inquiry" className="nav-list">
                1:1 문의
              </Link>
              <Link to="editinfo" className="nav-list">
                정보 수정
              </Link>
              <Link to="delete-account" className="nav-list">
                회원 탈퇴
              </Link>
            </Menu>
          </Inner>

          <Outlet />
        </Page>
      </Container>
    </>
  );
}

export default MyPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Inner = styled.div`
  position: absolute;
  width: 279px;
  height: 336px;
  top: 193px;
  left: -300px;
  border: 3px solid #0080c6;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Menu = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 47px;
  display: flex;
  flex-direction: column;
  .nav-list {
    color: #000000;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: #0080c6;
    }
  }
`;

const Page = styled.div`
  position: relative;
`;
