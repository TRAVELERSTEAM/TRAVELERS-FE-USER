import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { findEmailApi, FindEmailState } from '~/api/user/user';
import { isFindEmail } from '~/utils/atom';

function FindEmail() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FindEmailState>({
    defaultValues: {
      username: '',
      birth: '',
      gender: '',
    },
  });

  const watchUserName = watch('username');
  const watchBirth = watch('birth');
  const watchGender = watch('gender');

  const navigate = useNavigate();

  const setFindEmail = useSetRecoilState(isFindEmail);

  const { mutate } = useMutation('findemail', findEmailApi, {
    onSuccess: () => {
      const localEmail = localStorage.getItem('email');
      setFindEmail(localEmail);
    },
  });

  const onSubmit = (data: FindEmailState) => {
    console.log(data);
    mutate(data);
    navigate('/findemail-success');
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
            <ErrorMessage>{errors?.gender?.message}</ErrorMessage>
          </div>
          <RadioBox>
            <RadioItem className="radio-left">
              <input
                {...register('gender', {
                  required: '성별을 선택해주세요.',
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
        <InputBox className="last-box">
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
        <FindEmailButton disabled={!(watchUserName && watchGender && watchBirth)}>
          아이디 찾기
        </FindEmailButton>
      </FindEmailContainer>
    </Container>
  );
}

export default FindEmail;

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

const ErrorMessage = styled.p`
  color: #f00;
  display: block;
  font-size: 24px;
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
