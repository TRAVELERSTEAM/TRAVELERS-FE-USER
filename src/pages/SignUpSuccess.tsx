import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import SignUpState from '~/components/signup/SignUpState';
import { isSuccessState, Profile, UserName } from '~/utils/atom';

function SignUpSuccess() {
  const [isSuccess, setIsSuccess] = useRecoilState(isSuccessState);
  const username = useRecoilValue(UserName);
  const profile = useRecoilValue(Profile);
  const updateIsSuccess = () => {
    if (username && profile) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    updateIsSuccess();
  }, [isSuccess, username, profile]);

  const navigate = useNavigate();
  return (
    <Container>
      <SignUpState signUpPage="off" successSignUp="on" />
      <div className="success-info">
        {profile && <img src={profile} alt="user-profile" />}
        <div className="success-message">
          <p>'{username}'님</p>
          <p>가입이 완료되었습니다!</p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem('username');
            localStorage.removeItem('profile');
            navigate('/');
          }}
        >
          상품보러가기
        </button>
      </div>
    </Container>
  );
}

export default SignUpSuccess;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 100px;
  .success-info {
    width: 1220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 74px;
      width: 174px;
      height: 174px;
      border-radius: 100%;
    }
    .success-message {
      margin: 40px 0 122px;
      font-size: 32px;
      text-align: center;
      font-weight: 700;
      line-height: 50px;
      color: #434343;
    }
  }
  button {
    width: 314px;
    height: 74px;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #0080c6;
    color: #ffffff;
    font-size: 36px;
    font-weight: 700;
    cursor: pointer;
  }
`;
