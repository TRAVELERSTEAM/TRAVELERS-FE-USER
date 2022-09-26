import React from 'react';
import { useForm } from 'react-hook-form';

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
    handleSubmit,
    formState: { errors },
  } = useForm<memberLogin>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <article>
        <input
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
        <span>{errors?.email?.message}</span>
      </article>
      <article>
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
          type="password"
          autoComplete="on"
          placeholder="비밀번호"
        />
        <span>{errors?.password?.message}</span>
      </article>
      <button>로그인</button>
    </form>
  );
}

export default MemberLogin;
