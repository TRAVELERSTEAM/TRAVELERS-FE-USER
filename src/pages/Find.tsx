import React from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';
import FindEmail from '~/components/find/FindEmail';
import FindPassword from '~/components/find/FindPassword';

enum FindMethod {
  'email' = 'email',
  'password' = 'password',
}

const findMethodState = atom<FindMethod>({
  key: 'findMethodState',
  default: FindMethod.email,
});

function Find() {
  const [findMethod, setFindMethod] = useRecoilState(findMethodState);

  const onInput = (e: React.FormEvent<HTMLButtonElement>) => {
    setFindMethod(e.currentTarget.value as any);
    if (e.currentTarget.value === 'email') {
      e.currentTarget.classList.add('active');
      document.querySelector('.password')?.classList.remove('active');
    } else {
      e.currentTarget.classList.add('active');
      document.querySelector('.email')?.classList.remove('active');
    }
  };

  return (
    <FindContainer>
      <h3 className="findpage-title">아이디/비밀번호를 잊으셨나요?</h3>
      <ButtonBox>
        <FindMethodButton onClick={onInput} value={FindMethod.email} className="email active">
          아이디 찾기
        </FindMethodButton>
        <FindMethodButton onClick={onInput} value={FindMethod.password} className="password">
          비밀번호 찾기
        </FindMethodButton>
      </ButtonBox>
      {findMethod === FindMethod.email && <FindEmail />}
      {findMethod === FindMethod.password && <FindPassword />}
    </FindContainer>
  );
}

export default Find;

const FindContainer = styled.section`
  width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .findpage-title {
    font-size: 40px;
    margin: 84px 0 102px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  margin-bottom: 52px;
`;

const FindMethodButton = styled.button`
  width: 50%;
  font-size: 32px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 12px 0;
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
