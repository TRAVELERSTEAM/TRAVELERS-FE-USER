import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, InputBox, LoginButton, LoginInput } from '~/style/LoginCommonStyle';

interface noMemeberLogin {
  userName: string;
  reservation: string;
  phoneNumber: string;
}

function NoMemberLogin() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<noMemeberLogin>();

  const watchUserName = watch('userName');
  const watchReservation = watch('reservation');
  const watchPhoneNumber = watch('phoneNumber');

  const onSubmit = (data: noMemeberLogin) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <LoginInput
          {...register('userName', {
            required: '이름을 입력해주세요.',
          })}
          placeholder="이름"
        />
        <span>{errors?.userName?.message}</span>
      </InputBox>
      <InputBox>
        <LoginInput
          {...register('reservation', {
            required: '예약번호를 입력해주세요.',
          })}
          placeholder="예약번호"
        />
        <span>{errors?.reservation?.message}</span>
      </InputBox>
      <InputBox>
        <LoginInput
          {...register('phoneNumber', {
            required: '연락처를 입력해주세요.',
          })}
          placeholder="연락처"
        />
        <span>{errors?.phoneNumber?.message}</span>
      </InputBox>
      <LoginButton disabled={!(watchUserName && watchReservation && watchPhoneNumber)}>
        예약조회
      </LoginButton>
    </FormContainer>
  );
}

export default NoMemberLogin;
