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
    <section>
      <h1>로그인</h1>
      <div>
        <button onClick={onInput} value={LoginMethod.member} className="member active">
          회원
        </button>
        <button onClick={onInput} value={LoginMethod.noMember} className="noMember">
          비회원 예약조회
        </button>
      </div>
      {loginMethod === LoginMethod.member && <MemberLogin />}
      {loginMethod === LoginMethod.noMember && <NoMemberLogin />}
    </section>
  );
}

export default Login;
