import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isFindEmail, isFindEmailState } from '~/utils/atom';

function FindEmailSuccess() {
  const [isFind, setIsFind] = useRecoilState(isFindEmailState);
  const userEmail = useRecoilValue(isFindEmail);
  const navigate = useNavigate();
  const updateIsFind = () => {
    if (userEmail) {
      setIsFind(true);
    } else {
      setIsFind(false);
    }
  };

  useEffect(() => {
    updateIsFind();
  }, [isFind, userEmail]);

  return (
    <Container>
      <h3>회원님의 아이디는 다음과 같습니다.</h3>
      <FindEmailBox>
        <EmailText>{userEmail}</EmailText>
      </FindEmailBox>
      <Button
        onClick={() => {
          localStorage.removeItem('email');
          navigate('/login');
        }}
      >
        확인
      </Button>
    </Container>
  );
}

export default FindEmailSuccess;

const Container = styled.section`
  margin: 228px 0 590px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 40px;
  }
`;

const FindEmailBox = styled.div`
  width: 100%;
  height: 350px;
  margin: 98px 0 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const EmailText = styled.p`
  font-size: 40px;
  color: #0080c6;
  font-weight: 700;
`;

const Button = styled.button`
  width: 260px;
  height: 100px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #0080c6;
  color: #ffffff;
  font-size: 32px;
  cursor: pointer;
`;
