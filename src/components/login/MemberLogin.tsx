import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  ErrorMessage,
  FormContainer,
  InputBox,
  LoginButton,
  LoginInput,
} from '~/style/LoginCommonStyle';
import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { loginApi } from '~/api/user/user';
import { useNavigate } from 'react-router-dom';
import { isLoginState } from '~/App';
import { getCookieToken } from '~/utils/cookie';

export interface memberLogin {
  email: string;
  password: string;
}

function MemberLogin() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<memberLogin>();

  const { mutate, isLoading, isError } = useMutation('login', (data: memberLogin) =>
    loginApi(data),
  );

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const navigate = useNavigate();

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  const onSubmit = (data: memberLogin) => {
    mutate(data);
    navigate('/');
  };

  const updateLoginState = () => {
    const token = localStorage.getItem('accessToken');
    const cookie = getCookieToken();
    console.log(cookie);
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    updateLoginState();
  }, [isLoading]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <LoginInput
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
          type="email"
          placeholder="이메일"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
      </InputBox>
      <InputBox>
        <LoginInput
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          type="password"
          autoComplete="on"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
      </InputBox>
      <ButtonBox>
        <FindButton
          onClick={() => {
            navigate('/find');
          }}
        >
          이메일 / 비밀번호 찾기
        </FindButton>
      </ButtonBox>
      <LoginButton disabled={!(watchEmail && watchPassword)}>로그인</LoginButton>
    </FormContainer>
  );
}

export default MemberLogin;

const SaveButton = styled.div`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 0;
  margin-bottom: 20px;
  cursor: pointer;
  &.active {
    color: #0080c6;
    svg {
      path {
        fill: #0080c6;
      }
    }
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FindButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 22px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #0080c6;
  }
`;
