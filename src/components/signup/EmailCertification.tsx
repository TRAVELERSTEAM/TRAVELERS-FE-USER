import React from 'react';
import { useMutation } from 'react-query';
import { emailCertification, emailCertificationState } from '~/api/user/user';

function EmailCertification({ register }: any) {
  const { mutate } = useMutation('emailcertification', (data: emailCertificationState) =>
    emailCertification(data),
  );
  return (
    <>
      <input
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: '올바른 이메일 형식이 아닙니다.',
          },
        })}
        type="email"
        placeholder="이메일(아이디)"
        onChange={(e) => {
          mutate({ email: e.target.value });
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log('인증번호 전송');
        }}
      >
        인증하기
      </button>
    </>
  );
}

export default EmailCertification;
