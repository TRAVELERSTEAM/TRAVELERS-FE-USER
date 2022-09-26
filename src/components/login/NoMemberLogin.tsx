import React from 'react';
import { useForm } from 'react-hook-form';

interface noMemeberLogin {
  userName: string;
  reservation: string;
  phoneNumber: string;
}

function NoMemberLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<noMemeberLogin>();

  const onSubmit = (data: noMemeberLogin) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <article>
        <input
          {...register('userName', {
            required: '이름을 입력해주세요.',
          })}
          placeholder="이름"
        />
        <span>{errors?.userName?.message}</span>
      </article>
      <article>
        <input
          {...register('reservation', {
            required: '예약번호를 입력해주세요.',
          })}
          placeholder="예약번호"
        />
        <span>{errors?.reservation?.message}</span>
      </article>
      <article>
        <input
          {...register('phoneNumber', {
            required: '연락처를 입력해주세요.',
          })}
          placeholder="연락처"
        />
        <span>{errors?.phoneNumber?.message}</span>
      </article>
      <button>예약조회</button>
    </form>
  );
}

export default NoMemberLogin;
