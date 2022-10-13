import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import { editInfoApi, EditInfoState, myInfoApi } from '~/api/user/user';
import KindOfTrip from '~/components/signup/KindOfTrip';
import { area, group, theme } from './SignUpPage';

function EditInfo() {
  const { data, isLoading } = useQuery('myInfo', () => {
    return myInfoApi();
  });

  const [profile, setProfile] = useState(data?.profile);

  const { register, handleSubmit, setError, setValue } = useForm<EditInfoState>();

  const addProfile = useRef<HTMLInputElement | null>(null);
  const emailAuth = useRef<HTMLInputElement | null>(null);

  const { ref: profileRef, onChange: profileChange, ...profilelRest } = register('profile');
  const { ref: emailRef, ...emailRest } = register('email');

  const { mutate } = useMutation('editUserInfo', (data: EditInfoState) => editInfoApi(data));

  const onAddProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfile(reader.result as string);
        }
      };
      reader.readAsDataURL(file[0]);
    }
  };

  const onSubmit = (data: EditInfoState) => {
    if (data.changePassword !== data.confirmChangePassword) {
      setError(
        'confirmChangePassword',
        { message: '비밀번호가 같지 않습니다' },
        { shouldFocus: true },
      );
    }
    console.log(data);
    mutate(data);
  };

  useEffect(() => {
    if (data) {
      setValue('profile', data.profile);
      setValue('username', data.username);
      setValue('birth', data.birth);
      setValue('gender', data.gender);
      setValue('tel', data.tel);
      setValue('email', data.email);
      setValue('currentPassword', '');
      setValue('changePassword', '');
      setValue('confirmChangePassword', '');
      setValue('groupTrip', data.groupTrip);
      setValue('area', data.area);
      setValue('theme', data.theme);
      console.log(data);
    }
  }, [data]);

  if (isLoading) return <div>loading...</div>;

  return (
    <Container>
      <H1>정보 수정</H1>
      <EditContainer onSubmit={handleSubmit(onSubmit)}>
        <ProfileBox>
          {profile ? (
            <img src={profile} alt="사용자 이미지" />
          ) : (
            <img src="/basic-profile.png" alt="사용자 이미지" />
          )}
          <input
            {...profilelRest}
            onChange={(e) => onAddProfile(e)}
            type="file"
            ref={(e) => {
              profileRef(e);
              addProfile.current = e;
            }}
          />
          <AddProfileButton
            className="btn-modify"
            onClick={(e) => {
              e.preventDefault();
              addProfile.current?.click();
            }}
          />
        </ProfileBox>
        {data.authority === 'ROLE_USER' ? (
          <UserGrade>일반회원</UserGrade>
        ) : (
          <UserGrade>관리자</UserGrade>
        )}
        <InputBox>
          <label>
            이름<span>*</span>
          </label>
          <input
            {...register('username', { required: true })}
            type="text"
            placeholder="이름을 입력해주세요."
          />
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
        </InputBox>
        <InputBox>
          <label>현재 비밀번호</label>
          <input
            {...register('currentPassword')}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해 주세요."
          />
        </InputBox>
        <InputBox>
          <label>새 비밀번호</label>
          <input
            {...register('changePassword')}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
        </InputBox>
        <InputBox className="last-box">
          <label>새 비밀번호 확인</label>
          <input
            {...register('confirmChangePassword')}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
        </InputBox>
        <GroupBox>
          <ul className="group">
            <p>그룹별 여행</p>
            {group.map((item, index) => (
              <KindOfTrip item={item} key={index} name="groupTrip" register={register} />
            ))}
          </ul>
          <ul className="group group-center">
            <p>지역별 여행</p>
            {area.map((item, index) => (
              <KindOfTrip item={item} key={index} name="area" register={register} />
            ))}
          </ul>
          <ul className="group">
            <p>테마별 여행</p>
            {theme.map((item, index) => (
              <KindOfTrip item={item} key={index} name="theme" register={register} />
            ))}
          </ul>
        </GroupBox>
        <SignUpButton>수정하기</SignUpButton>
      </EditContainer>
    </Container>
  );
}

export default EditInfo;

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-top: 110px;
  margin-bottom: 43px;
`;

const EditContainer = styled.form`
  display: flex;
  width: 1372px;
  flex-direction: column;
`;

const ProfileBox = styled.article`
  margin: 0 auto 32px;
  position: relative;
  width: 174px;
  height: 174px;
  border-radius: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const AddProfileButton = styled.button`
  position: absolute;
  bottom: 0;
  right: -12px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  outline: none;
  background-image: url(/add-profile.png);
  cursor: pointer;
`;

const UserGrade = styled.p`
  font-size: 26px;
  margin: 0 auto 54px;
`;

const InputBox = styled.article`
  width: 100%;
  height: 126px;
  display: flex;
  align-items: center;
  border-top: 1px solid #939598;
  box-sizing: border-box;
  position: relative;
  &.last-box {
    border-bottom: 1px solid #939598;
  }
  label {
    width: 240px;
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
    width: 696px;
    height: 78px;
    margin-left: 18px;
    border: 1px solid #939598;
    border-radius: 10px;
    color: #939598;
    font-size: 24px;
    padding-left: 14px;
    box-sizing: border-box;
  }
`;

const RadioBox = styled.article`
  position: absolute;
  right: 0;
  width: 198px;
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
  }
`;

const GroupBox = styled.article`
  margin: 66px 0 182px 0;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  .group {
    padding: 10px 100px 40px 88px;
    &:first-child,
    &:last-child {
      padding-left: 0;
    }
  }
  .group-center {
    border-left: 1px solid #939598;
    border-right: 1px solid #939598;
  }
  p {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const SignUpButton = styled.button`
  width: 998px;
  height: 78px;
  background-color: #0080c6;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 28px;
  margin-bottom: 200px;
  cursor: pointer;
  &:disabled {
    background-color: #9da0a7;
    cursor: default;
  }
`;
