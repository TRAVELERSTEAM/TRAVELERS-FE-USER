import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <FooterInner>
        <TermWrap className="term-wrap">
          <ul>
            <li>
              <a href="#">안심카드결제</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li className="bold">
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">여행약관</a>
            </li>
          </ul>
        </TermWrap>
        <InfoWrap>
          <div className="service-info_box">
            <span className="title">고객센터</span>
            <span>
              <strong className="tel-num">02-6105-7711</strong>
            </span>
            <span>영업시간 : 09:00 ~ 18:00 </span>
            <span className="closed">토/일요일 및 공유일 휴무</span>
          </div>
          <div className="account-info_box">
            <span className="title">입금계좌</span>
            <span>
              <strong className="bank-name">KEB하나은행</strong>
            </span>
            <span className="account-num">
              <strong>267-910020-36604</strong>
            </span>
            <span>(주)더샤이니</span>
          </div>
        </InfoWrap>
        <Address>
          상호명: (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕ㅣ주소: 서울특별시 중구
          청계천로40(한국관광공사 서울센터) 707호 <br />
          사업자등록번호: 495-87-02492ㅣ통신판매업신고번호: 2021-서울중구-2450ㅣ이메일:
          gotogether@shinytravels.com
        </Address>
        <Advice className="advice">
          고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에 대하여 책임을 집니다.{' '}
          <br />
          고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및
          거래에 대하여 책임을 지지 않습니다.
        </Advice>
        <p className="copyright">Copyright &copy; 2022 고투게더 All rights reserved.</p>
      </FooterInner>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  * {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  background: #9e9e9e;
  width: 100%;
  span {
    font-size: 16px;
  }
`;

const FooterInner = styled.div`
  margin: 0 auto;
  padding: 20px 0 11px;
  width: 895px;
`;

const TermWrap = styled.div`
  padding-bottom: 71px;
  ul {
    display: flex;
    li {
      margin-right: 18px;
      &:last-child {
        margin-right: 0;
      }
      a {
        color: #000;
      }
    }
    .bold {
      font-weight: bold;
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  .service-info_box,
  .account-info_box {
    flex-grow: 1;
  }
  span {
    display: block;
    padding-bottom: 5px;
  }
  .service-info_box {
    .tel-num {
      font-size: 24px;
      line-height: 30px;
    }
  }
  .account-info_box {
    .bank-name,
    .account-num {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
const Address = styled.address`
  padding: 23px 0;
  font-style: normal;
  letter-spacing: -0.5px;
  word-spacing: -3px;
`;

const Advice = styled.p`
  padding-bottom: 23px;
  letter-spacing: -0.5px;
`;
