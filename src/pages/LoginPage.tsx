import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import MemberLogin from '~/components/login/MemberLogin';
import NoMemberLogin from '~/components/login/NoMemberLogin';

enum LoginMethod {
  'member' = 'member',
  'noMember' = 'noMember',
}

const loginMethodState = atom<LoginMethod>({
  key: 'loginMethodState',
  default: LoginMethod.member,
});

// const loginMethodSelector = selector({
//   key: 'loginMethodSelector',
//   get: ({ get }) => {
//     const loginMethod = get(loginMethodState);
//     return loginMethod;
//   },
// });

// const loginApi = async () => {
//   const { data } = await axios.post('http://localhost:3000/login', {
//     email: '',
//     password: '',
//   });
//   return data;
// };

function Login() {
  // const loginMethod = useRecoilValue(loginMethodSelector);
  const [loginMethod, setLoginMethod] = useRecoilState(loginMethodState);

  // const { data } = useQuery('login', loginApi);

  // if (isLoading) return <div>loading...</div>;
  // if (isError) return <div>error...</div>;

  const onInput = (e: React.FormEvent<HTMLButtonElement>) => {
    setLoginMethod(e.currentTarget.value as any);
    if (e.currentTarget.value === 'member') {
      document.querySelector('.noMember')?.classList.remove('active');
      document.querySelector('.member')?.classList.add('active');
    } else {
      document.querySelector('.member')?.classList.remove('active');
      document.querySelector('.noMember')?.classList.add('active');
    }
  };

  return (
    <LoginContainer>
      <h1>로그인</h1>
      <ButtonBox>
        <LoginMethodButton onClick={onInput} value={LoginMethod.member} className="member active">
          회원
        </LoginMethodButton>
        <LoginMethodButton onClick={onInput} value={LoginMethod.noMember} className="noMember">
          비회원 예약조회
        </LoginMethodButton>
      </ButtonBox>
      {loginMethod === LoginMethod.member && <MemberLogin />}
      {loginMethod === LoginMethod.noMember && <NoMemberLogin />}
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.section`
  width: 668px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-bottom: 52px;
`;

const LoginMethodButton = styled.button`
  width: 50%;
  font-size: 32px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 10px 0;
  cursor: pointer;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom: 1px solid #000;
  &:hover {
    color: #0080c6;
    background-color: rgba(0, 0, 0, 0.05);
  }
  &.active {
    color: #0080c6;
    border: 1px solid #000;
    border-bottom-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }
`;
