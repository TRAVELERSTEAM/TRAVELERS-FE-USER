import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  emailCertification,
  emailCertificationState,
  emailVerify,
  signUpApi,
} from '~/api/user/user';
import EmailCertification from '~/components/signup/EmailCertification';
import KindOfTrip from '~/components/signup/KindOfTrip';

const group = ['5070끼리', '2040끼리', '남자끼리', '여자끼리', '자녀동반', '누구든지'];
const area = [
  '동남아 / 태평양',
  '인도 / 중앙아시아',
  '아프리카 / 중동',
  '유럽 / 코카서스',
  '중남미 / 북미',
  '대만 / 중국 / 일본',
];
const theme = ['문화탐방', '골프여행 ', '휴양지', '트레킹', '성지순례', '볼론투어'];

export interface signUp {
  profile?: string;
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

const ProfileState = atom({
  key: 'profileImg',
  default: '',
});

// const emailAuthState = atom({
//   key: 'emailAuth',
//   default: '',
// });

function SignUp() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<signUp>();

  const [checkedList, setCheckedList] = useState<Array<string>>([]);
  console.log(watch());

  const addProfile = useRef<HTMLInputElement>(null);
  const emailAuth = useRef<HTMLInputElement>(null);
  const emailKey = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useRecoilState<string>(ProfileState);
  console.log(profile);
  const {
    mutate: signUp,
    isLoading,
    isError,
  } = useMutation('signup', (data: signUp) => signUpApi(data));
  const { mutate: emailCertificate } = useMutation(
    'emailcertification',
    (data: emailCertificationState) => emailCertification(data),
  );
  // const { data: emailkey } = useQuery(
  //   'emailkey',
  //   async () =>
  //     await emailVerify({
  //       email: emailAuth.current?.value as string,
  //       key: emailKey.current?.value as string,
  //     }),
  // );

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  const onChecked = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList([...checkedList, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList],
  );

  const onSubmit = (data: signUp) => {
    console.log(data);
    console.log(data.email);
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: '비밀번호가 같지 않습니다' }, { shouldFocus: true });
    }
    // signUp(data);
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

  // useEffect(() => {
  //   emailAuth.current?.value;
  // }, [emailAuth, emailKey, emailkey]);

  return (
    <SignUpContainer onSubmit={handleSubmit(onSubmit)}>
      {/* <article>
        {profile && profile ? (
          <img src={profile} alt="사용자 이미지" />
        ) : (
          <img src="/noprofile.png" alt="사용자 이미지" />
        )}
        <input
          {...register('profile', {
            required: true,
            onChange: (e) => onAddProfile(e),
          })}
          type="file"
          ref={addProfile}
          className="hidden"
        />
        <button
          className="btn-modify"
          onClick={(e) => {
            e.preventDefault();
            addProfile.current?.click();
          }}
        >
          이미지 변경
        </button>
      </article> */}
      <div>
        <p>반갑습니다!</p>
        <p>로그인하면 예약을 더 쉽고 빠르게 할 수 있습니다.</p>
        <p>
          ※ 생년월일, 성별, 취미, 선호 유형 그룹을 입력하면 비슷한 유형의 여행 그룹을 추천해
          드립니다.
        </p>
      </div>
      <article>
        <label>이름 *</label>
        <input
          {...register('username', { required: '이름을 입력해주세요' })}
          type="text"
          placeholder="이름을 입력해주세요."
        />
        <span>{errors?.username?.message}</span>
      </article>
      <article>
        <div>
          <input {...register('gender')} value="남" type="radio" name="gender" />
          <label>남</label>
        </div>
        <div>
          <input {...register('gender')} value="여" type="radio" name="gender" />
          <label>여</label>
        </div>
      </article>
      <article>
        <label>생년월일 *</label>
        <input
          {...register('birth', {
            required: '생년월일을 입력해주세요.',
          })}
          type="text"
          placeholder="생일을 입력해 주세요. (예: 19500101)"
        />
        <span>{errors?.birth?.message}</span>
      </article>
      <article>
        <label>휴대번호 *</label>
        <input
          {...register('tel', {
            required: '휴대폰번호를 입력해주세요.',
          })}
          type="text"
          placeholder="휴대폰번호를 입력해 주세요. (예: 01012345678)"
        />
        <span>{errors?.tel?.message}</span>
      </article>
      <article>
        <label>이메일(아이디) *</label>
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
          ref={emailAuth}
        />
        <span>{errors?.email?.message}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            // e.currentTarget.value = emailAuth.current?.value as string;
            console.log(emailAuth.current?.value);
            emailCertificate({ email: emailAuth.current?.value as string });
          }}
        >
          인증하기
        </button>
      </article>
      <article>
        <label>이메일 인증 *</label>
        <input
          {...register('key', {
            required: '인증번호를 입력해주세요.',
          })}
          type="text"
          ref={emailKey}
          placeholder="이메일 인증번호를 입력해 주세요"
        />
        <span>{errors?.key?.message}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            // emailKey.current?.click();
            emailVerify({
              email: emailAuth.current?.value as string,
              key: emailKey.current?.value as string,
            });
          }}
        >
          인증 확인
        </button>
      </article>
      <article>
        <label>비밀번호 *</label>
        <input
          {...register('password', { required: true })}
          type="password"
          autoComplete="on"
          placeholder="비밀번호를 입력해 주세요."
        />
        <span>{errors?.password?.message}</span>
      </article>
      <article>
        <label>비밀번호 확인 *</label>
        <input
          {...register('confirmPassword', {
            required: true,
          })}
          type="password"
          autoComplete="on"
          placeholder="비밀번호를 한 번 더 입력해주세요."
        />
        <span>{errors?.confirmPassword?.message}</span>
      </article>
      <article>
        <div className="group">
          <p>그룹별 여행</p>
          {group.map((item, index) => (
            <KindOfTrip
              item={item}
              key={index}
              name="groupTrip"
              register={register}
              onChecked={onChecked}
              checkedList={checkedList}
            />
          ))}
        </div>
        <div className="area">
          <p>지역별 여행</p>
          {area.map((item, index) => (
            <KindOfTrip
              item={item}
              key={index}
              name="area"
              register={register}
              onChecked={onChecked}
              checkedList={checkedList}
            />
          ))}
        </div>
        <div className="theme">
          <p>테마별 여행</p>
          {theme.map((item, index) => (
            <KindOfTrip
              item={item}
              key={index}
              name="theme"
              register={register}
              onChecked={onChecked}
              checkedList={checkedList}
            />
          ))}
        </div>
      </article>
      <article>
        <label>추천인</label>
        <input
          {...register('recommend', {
            required: true,
          })}
          type="text"
          placeholder="추천인 코드를 입력하세요. (예: 19500101)"
        />
        <span>{errors?.recommend?.message}</span>
      </article>
      <button>회원가입</button>
    </SignUpContainer>
  );
}

export default SignUp;

const SignUpContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const HelloLogin = styled.div`
//   color: #939598;
//   font-size: 24px;
//   border-left: 6px solid #0080c6;
//   padding-left: 10px;
//   line-height: 120%;
// `;

// const UserProfile = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 50px 0 38px;
//   border-bottom: 1px solid #ebebeb;
// `;

// const ProfileThumb = styled.div`
//   flex: none;
//   margin-right: 18px;
//   width: 100px;
//   height: 100px;
//   border-radius: 100%;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const ProfileDetail = styled.div`
//   .profile_btn_box {
//     margin-top: 8px;
//   }
//   .hidden {
//     /* display: none; */
//     opacity: 0;
//   }
//   .btn_modify {
//     margin-top: 0;
//     &:last-child {
//       margin-left: 8px;
//     }
//   }
// `;
