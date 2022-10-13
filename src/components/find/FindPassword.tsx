import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import {
  emailCertification,
  emailCertificationState,
  emailVerify,
  emailVerifyState,
  findPasswordApi,
  FindPasswordState,
} from '~/api/user/user';

function FindPassword() {
  const { register, watch, handleSubmit } = useForm<FindPasswordState>({
    defaultValues: {
      username: '',
      birth: '',
      tel: '',
      gender: '',
      email: '',
      key: '',
    },
  });

  const emailAuth = useRef<HTMLInputElement | null>(null);
  const emailKey = useRef<HTMLInputElement | null>(null);

  const { ref: emailRef, ...emailRest } = register('email');
  const { ref: keyRef, ...keyRest } = register('key');

  const watchUserName = watch('username');
  const watchBirth = watch('birth');
  const watchGender = watch('gender');
  const watchTel = watch('tel');
  const watchEmail = watch('email');
  const watchKey = watch('key');

  const { mutate: emailCertificate } = useMutation(
    'emailcertification',
    (data: emailCertificationState) => emailCertification(data),
  );

  const { mutate: emailkey } = useMutation('emailkey', (data: emailVerifyState) =>
    emailVerify(data),
  );

  const { mutate: findPassword } = useMutation('findpassword', findPasswordApi);

  const onSubmit = (data: FindPasswordState) => {
    console.log(data);
    findPassword(data);
  };
  return (
    <Container>
      <FindEmailContainer onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <label>
            이름<span>*</span>
          </label>
          <div>
            <input
              {...register('username', { required: true })}
              type="text"
              placeholder="이름을 입력해주세요."
            />
          </div>
          <RadioBox>
            <RadioItem className="radio-left">
              <input
                {...register('gender', {
                  required: true,
                })}
                value="MALE"
                type="radio"
                name="gender"
                id="male"
              />
              <label htmlFor="male">남</label>
            </RadioItem>
            <RadioItem className="radio-right">
              <input
                {...register('gender', {
                  required: true,
                })}
                value="FEMALE"
                type="radio"
                name="gender"
                id="female"
              />
              <label htmlFor="female">여</label>
            </RadioItem>
          </RadioBox>
        </InputBox>
        <InputBox>
          <label>
            생년월일<span>*</span>
          </label>
          <input
            {...register('birth', {
              required: true,
            })}
            type="text"
            placeholder="생일을 입력해 주세요. (예: 19500101)"
          />
        </InputBox>
        <InputBox>
          <label>
            휴대번호<span>*</span>
          </label>
          <input
            {...register('tel', {
              required: true,
            })}
            type="text"
            placeholder="휴대폰번호를 입력해 주세요. (예: 01012345678)"
          />
        </InputBox>
        <InputBox>
          <label>
            이메일(아이디)<span>*</span>
          </label>
          <input
            {...emailRest}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
            type="email"
            placeholder="이메일(아이디)"
            ref={(e) => {
              emailRef(e);
              emailAuth.current = e;
            }}
          />
          <SucessButton
            onClick={(e) => {
              e.preventDefault();
              console.log(emailAuth.current?.value);
              emailCertificate({ email: emailAuth.current?.value as string });
            }}
            disabled={!watchEmail}
          >
            인증하기
          </SucessButton>
        </InputBox>
        <InputBox>
          <label>
            이메일 인증<span>*</span>
          </label>
          <input
            {...keyRest}
            {...register('key', {
              required: true,
            })}
            type="text"
            ref={(e) => {
              keyRef(e);
              emailKey.current = e;
            }}
            placeholder="이메일 인증번호를 입력해 주세요"
          />
          <SucessButton
            onClick={(e) => {
              e.preventDefault();
              emailkey({
                email: emailAuth.current?.value as string,
                key: emailKey.current?.value as string,
              });
            }}
            disabled={!watchKey}
          >
            인증 확인
          </SucessButton>
        </InputBox>
        <FindEmailButton
          disabled={!(watchUserName && watchGender && watchBirth && watchTel && watchEmail)}
        >
          비밀번호 찾기
        </FindEmailButton>
      </FindEmailContainer>
    </Container>
  );
}

export default FindPassword;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FindEmailContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const InputBox = styled.article`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  border-top: 1px solid #939598;
  box-sizing: border-box;
  position: relative;
  &.last-box {
    border-bottom: 1px solid #939598;
  }
  label {
    width: 256px;
    height: 100%;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    padding-left: 28px;
    font-size: 24px;
    span {
      margin-left: 10px;
      transform: translateY(3px);
    }
  }
  input {
    width: 772px;
    height: 78px;
    margin-left: 18px;
    border: 1px solid #939598;
    border-radius: 10px;
    color: #000000;
    font-size: 24px;
    padding-left: 14px;
    box-sizing: border-box;
    &:focus {
      outline: 1px solid #0080c6;
    }
    &::placeholder {
      color: #939598;
    }
  }
`;

const RadioBox = styled.article`
  position: absolute;
  right: 0;
  width: 220px;
  height: 78px;
  display: inline-flex;
  border: 1px solid #939598;
  border-radius: 10px;
  box-sizing: border-box;
`;

const RadioItem = styled.div`
  width: 50%;
  &.radio-left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid #939598;
    label {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  &.radio-right {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    label {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  input {
    display: none;
  }
  label {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    font-size: 24px;
    color: #939598;
    text-align: center;
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  input:focus + label,
  input:checked + label {
    background-color: #f7f7f7;
    color: #0080c6;
  }
`;

const SucessButton = styled.button`
  position: absolute;
  right: 0;
  width: 220px;
  height: 78px;
  border: 1px solid #939598;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 24px;
  background-color: #ffffff;
  color: #939598;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
  &:disabled {
    cursor: default;
    background-color: #ffffff;
  }
`;

const FindEmailButton = styled.button`
  width: 998px;
  height: 78px;
  background-color: #0080c6;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 28px;
  margin: 60px 0 536px;
  cursor: pointer;
  &:disabled {
    background-color: #9da0a7;
    cursor: default;
  }
`;
