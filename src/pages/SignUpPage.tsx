import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  emailCertification,
  emailCertificationState,
  emailVerify,
  emailVerifyState,
  signUpApi,
} from '~/api/user/user';
import KindOfTrip from '~/components/signup/KindOfTrip';
import SignUpState from '~/components/signup/SignUpState';
import { Profile, UserName } from '~/utils/atom';

export const group = ['5070끼리', '2040끼리', '남자끼리', '여자끼리', '자녀동반', '누구든지'];
export const area = [
  '동남아 / 태평양',
  '인도 / 중앙아시아',
  '아프리카 / 중동',
  '유럽 / 코카서스',
  '중남미 / 북미',
  '대만 / 중국 / 일본',
];
export const theme = ['문화탐방', '골프여행 ', '휴양지', '트레킹', '성지순례', '볼론투어'];

export interface signUp {
  profile: string;
  username: string;
  gender: string;
  birth: string;
  tel: string;
  email: string;
  key: string;
  password: string;
  confirmPassword: string;
  groupTrip?: string[];
  area?: string[];
  theme?: string[];
  recommend?: string;
}

function SignUp() {
  const [profile, setProfile] = useState('');

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<signUp>({
    defaultValues: {
      profile: profile,
      username: '',
      birth: '',
      tel: '',
      gender: '',
      email: '',
      key: '',
      password: '',
      confirmPassword: '',
      groupTrip: [],
      area: [],
      theme: [],
      recommend: '',
    },
  });

  const addProfile = useRef<HTMLInputElement | null>(null);
  const emailAuth = useRef<HTMLInputElement | null>(null);
  const emailKey = useRef<HTMLInputElement | null>(null);

  const { ref: profileRef, onChange: profileChange, ...profilelRest } = register('profile');
  const { ref: emailRef, ...emailRest } = register('email');
  const { ref: keyRef, ...keyRest } = register('key');

  const watchUserName = watch('username');
  const watchBirth = watch('birth');
  const watchTel = watch('tel');
  const watchGender = watch('gender');
  const watchEmail = watch('email');
  const watchKey = watch('key');
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirmPassword');

  const setUserName = useSetRecoilState(UserName);
  const setProfileUrl = useSetRecoilState(Profile);

  const {
    mutate: signUp,
    isLoading,
    isError,
  } = useMutation('signup', (data: signUp) => signUpApi(data), {
    onSuccess: () => {
      const localUserName: any = localStorage.getItem('username');
      const localProfileUrl: any = localStorage.getItem('profile');
      setUserName(localUserName);
      setProfileUrl(localProfileUrl);
      navigate('/signup-success');
    },
  });

  const { mutate: emailCertificate } = useMutation(
    'emailcertification',
    (data: emailCertificationState) => emailCertification(data),
  );

  const { mutate: emailkey } = useMutation('emailkey', (data: emailVerifyState) =>
    emailVerify(data),
  );

  const navigate = useNavigate();

  const onSubmit = (data: signUp) => {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: '비밀번호가 같지 않습니다' }, { shouldFocus: true });
    }
    console.log(data);
    signUp(data);
  };

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

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;
  return (
    <Container>
      <SignUpState signUpPage="on" successSignUp="off" />
      <SignUpContainer onSubmit={handleSubmit(onSubmit)}>
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
        <SignUpExplanation>
          <p>반갑습니다!</p>
          <p>로그인하면 예약을 더 쉽고 빠르게 할 수 있습니다.</p>
          <p>
            ※ 생년월일, 성별, 취미, 선호 유형 그룹을 입력하면 비슷한 유형의 여행 그룹을 추천해
            드립니다.
          </p>
        </SignUpExplanation>
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
        <InputBox>
          <label>
            비밀번호<span>*</span>
          </label>
          <input
            {...register('password', { required: true })}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해 주세요."
          />
          <span>{errors?.password?.message}</span>
        </InputBox>
        <InputBox className="last-box">
          <label>
            비밀번호 확인<span>*</span>
          </label>
          <input
            {...register('confirmPassword', {
              required: true,
            })}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
          <span>{errors?.confirmPassword?.message}</span>
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
        <RecommendBox>
          <label>추천인</label>
          <input {...register('recommend')} type="text" placeholder="추천인 코드를 입력하세요." />
        </RecommendBox>
        <SignUpButton
          disabled={
            !(
              watchUserName &&
              watchBirth &&
              watchGender &&
              watchTel &&
              watchEmail &&
              watchKey &&
              watchPassword &&
              watchConfirmPassword
            )
          }
        >
          가입하기
        </SignUpButton>
        <Terms>
          가입하시면 <span>이용약관</span>에 동의하게됩니다.
        </Terms>
      </SignUpContainer>
    </Container>
  );
}

export default SignUp;

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 100px;
`;

const SignUpContainer = styled.form`
  display: flex;
  width: 1220px;
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

const SignUpExplanation = styled.div`
  color: #939598;
  font-size: 24px;
  border-left: 6px solid #0080c6;
  padding-left: 10px;
  line-height: 120%;
  margin-bottom: 44px;
`;

const InputBox = styled.article`
  width: 1220px;
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

const SucessButton = styled.button`
  position: absolute;
  right: 0;
  width: 198px;
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

const RecommendBox = styled.article`
  display: flex;
  flex-direction: column;
  label {
    font-size: 26px;
    margin-bottom: 20px;
  }
  input {
    width: 998px;
    height: 78px;
    border: 1px solid #939598;
    border-radius: 10px;
    color: #939598;
    font-size: 24px;
    padding-left: 14px;
    box-sizing: border-box;
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
  margin: 82px 0 14px;
  cursor: pointer;
  &:disabled {
    background-color: #9da0a7;
    cursor: default;
  }
`;

const Terms = styled.p`
  margin-bottom: 842px;
  font-size: 26px;
  transform: translateX(20%);
  span {
    color: #0080c6;
  }
`;
