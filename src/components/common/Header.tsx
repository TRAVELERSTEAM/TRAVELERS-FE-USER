import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <Wrap className="wrap">
        <Link className="logo" to="/">
          <img src="/logo.png" alt="gotogether-logo" />
        </Link>
        <SearchArea>
          <div className="search-box">
            <div className="search-icon">
              <img className="search-btn" src="/search_icon.png" alt="search-icon" />
            </div>
            <input placeholder="여행 그룹이나 상품을 검색해보세요" />
          </div>
        </SearchArea>
        <UserMenu>
          <Link className="user-menu" to="/find">
            <span className="cart-icon">
              <img src="/cart_icon.png" alt="mypage-icon" />
            </span>
            마이페이지
          </Link>
          <Link className="user-menu" to="/login">
            <span className="login-icon">
              <img src="/login_icon.png" alt="mypage-icon" />
            </span>
            로그인
          </Link>
          <Link className="user-menu" to="/signup">
            <span className="user-icon">
              <img src="/user_icon.png" alt="mypage-icon" />
            </span>
            회원가입
          </Link>
        </UserMenu>
      </Wrap>
      <Wrap className="menu">
        <Nav>
          <ul>
            <li className="whole">
              <a href="#">
                <span>
                  <img src="/menu_icon.png" alt="menu-icon" />
                </span>
                전체메뉴
              </a>
              <WholeMenu className="whole-menu">
                <li>
                  <h3 className="title">여행큐레이션</h3>
                  <ul>
                    <li className="menu_list">
                      <a href="#">여행 그룹 추천 받기</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">나의 여행 유형 테스트</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="title">그룹별 여행</h3>
                  <ul>
                    <li className="menu_list">
                      <a href="#">5070끼리</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">2040끼리</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">남자끼리</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">여자끼리</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">자녀동반</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">누구든지</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="title">지역별 여행</h3>
                  <ul>
                    <li className="menu_list">
                      <a href="#">동남아 / 태평양</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">인도 / 중앙아시아</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">아프리카 / 중동</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">유럽 / 코카서스</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">중남미 / 북미</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">대만 / 중국 / 일본</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="title">테마별 여행</h3>
                  <ul>
                    <li className="menu_list">
                      <a href="#">문화탐방</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">골프여행</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">휴양지</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">트레킹</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">성지순례</a>
                    </li>
                    <li className="menu_list">
                      <a href="#">볼론투어</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className="title">알림마당</h3>
                  <ul>
                    <li className="menu_list">
                      <Link to="/notice">공지사항</Link>
                    </li>
                    <li className="menu_list">
                      <a href="#">자료실</a>
                    </li>
                  </ul>
                </li>
              </WholeMenu>
            </li>
            <li>
              <Link to="/groups">그룹별 여행</Link>
            </li>
            <li>
              <Link to="/destination">지역별 여행</Link>
            </li>
            <li>
              <Link to="/themes">테마별 여행</Link>
            </li>
          </ul>
        </Nav>
      </Wrap>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  * {
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  width: 100%;
  border-bottom: 3px solid #ddd;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 90vw;
  max-width: 1372px;
  .logo {
    img {
      width: 198px;
    }
  }
`;

const SearchArea = styled.div`
  flex-grow: 1;
  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 85px;
    width: 440px;
    height: 60px;
    background-color: #d9d9d9;
    border-radius: 10px;
    .search-icon {
      padding-left: 17px;
      img {
        width: 18px;
      }
    }
    input {
      padding: 18px 13px;
      width: 440px;
      height: 60px;
      font-size: 20px;
      background-color: #d9d9d9;
      border: 0;
      border-radius: 10px;
      outline: 0;
    }
  }
`;

const UserMenu = styled.div`
  .user-menu {
    margin-right: 30px;
    font-size: 20px;
    color: #000;
    &:last-child {
      margin-right: 0;
    }
    span {
      margin-right: 9px;
    }
    .cart-icon {
      img {
        width: 21px;
      }
    }
    .login-icon {
      img {
        width: 17px;
      }
    }
    .user-icon {
      img {
        width: 16px;
      }
    }
  }
`;

const Nav = styled.nav`
  position: relative;
  & > ul {
    display: flex;
    margin-top: 33px;
    & > li {
      margin-right: 112px;
      padding-bottom: 22px;
      & > a {
        font-size: 28px;
        font-weight: 600;
        line-height: 26px;
        color: #212529;
        letter-spacing: -2px;
      }
    }
    span {
      margin-right: 11px;
    }
  }
  .whole-menu {
    display: none;
  }
  .whole:hover .whole-menu {
    display: flex;
  }
`;

const WholeMenu = styled.div`
  position: absolute;
  top: 83px;
  left: 0;
  padding: 29px 45px;
  background-color: #fff;
  border-top: 3px solid #ddd;
  z-index: 9999;
  li {
    margin-right: 22px;
    width: 234px;
    &:last-child {
      margin-right: 0;
    }
    .title {
      display: block;
      margin-bottom: 20px;
      padding-bottom: 10px;
      font-size: 32px;
      white-space: nowrap;
      border-bottom: 1px solid #000;
    }
    .menu_list {
      font-size: 24px;
      line-height: 29px;
      word-spacing: -3px;
      padding: 3px 0;
      a {
        color: #000;
      }
    }
  }
`;
