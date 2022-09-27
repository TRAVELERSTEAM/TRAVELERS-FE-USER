import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  ErrorMessage,
  FormContainer,
  InputBox,
  LoginButton,
  LoginInput,
} from '~/style/LoginCommonStyle';

interface memberLogin {
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

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  const onSubmit = (data: memberLogin) => {
    console.log(data);
  };

  const onSave = () => {
    const saveButton = document.querySelector('.save-button');
    saveButton!.classList.toggle('active');
  };

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
      <SaveButton className="save-button" onClick={onSave}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0026 3.33301C10.8026 3.33301 3.33594 10.7997 3.33594 19.9997C3.33594 29.1997 10.8026 36.6663 20.0026 36.6663C29.2026 36.6663 36.6693 29.1997 36.6693 19.9997C36.6693 10.7997 29.2026 3.33301 20.0026 3.33301ZM20.0026 33.333C12.6526 33.333 6.66927 27.3497 6.66927 19.9997C6.66927 12.6497 12.6526 6.66634 20.0026 6.66634C27.3526 6.66634 33.3359 12.6497 33.3359 19.9997C33.3359 27.3497 27.3526 33.333 20.0026 33.333ZM27.6526 12.633L16.6693 23.6163L12.3526 19.3163L10.0026 21.6663L16.6693 28.333L30.0026 14.9997L27.6526 12.633Z"
            fill="#757575"
          />
        </svg>
        <span>아이디 저장</span>
      </SaveButton>
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
