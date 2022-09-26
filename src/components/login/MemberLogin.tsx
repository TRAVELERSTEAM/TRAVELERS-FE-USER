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

const onSubmit = (data: memberLogin) => {
  console.log(data);
};

function MemberLogin() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<memberLogin>();

  const watchEmail = watch('email');
  const watchPassword = watch('password');

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
      <LoginButton disabled={!(watchEmail && watchPassword)}>로그인</LoginButton>
    </FormContainer>
  );
}

// 패스워드 비밀번호 표시하기
// const [isPasswordShown, setIsPasswordShown] = useState(false);
// const togglePasswordVisiblity = () => {
//   setIsPasswordShown(isPasswordShown ? false : true);
// };

export default MemberLogin;
