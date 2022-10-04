import axios from 'axios';
import { memberLogin } from '~/components/login/MemberLogin';
import { signUp } from '~/pages/SignUpPage';

export const loginApi = async (payload: memberLogin) => {
  const { email, password } = payload;
  const { data } = await axios.post('http://www.gotogether.gq/login', {
    email,
    password,
  });
  console.log(data);
  if (data.status === 200) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
    return data;
  }
  if (data.status === 401) {
    alert('아이디 또는 비밀번호를 확인해주세요');
  }
  // 엑세스토큰 만료시 500에러
  if (data.status === 500) {
  }
};

// interface token {
//   accessToken: string;
//   refreshToken: string;
// }

// const reissueApi = async (payload: token) => {
//   const { accessToken, refreshToken } = payload;
//   const { data } = await axios.get('http://43.200.38.193:8888/reissue', {
//     accessToken,
//     refreshToken,
//   });
//   return data;
// };

export const signUpApi = async (payload: signUp) => {
  const {
    // profile,
    username,
    gender,
    birth,
    tel,
    email,
    key,
    password,
    confirmPassword,
    groupTrip,
    area,
    theme,
    recommend,
  } = payload;

  const { data } = await axios.post('http://www.gotogether.gq/register', {
    // profile,
    username,
    gender,
    birth,
    tel,
    email,
    key,
    password,
    confirmPassword,
    groupTrip,
    area,
    theme,
    recommend,
  });
  return data;
};

export interface emailCertificationState {
  email: string;
}

export const emailCertification = async (payload: emailCertificationState) => {
  const { email } = payload;
  const { data } = await axios.post('http://www.gotogether.gq/verify', {
    email,
  });
  return data;
};

export interface emailVerifyState {
  email: string;
  key: string;
}

export const emailVerify = async (payload: emailVerifyState) => {
  const { email, key } = payload;
  const { data } = await axios.get(`http://www.gotogether.gq/verify/${email}/${key}`);
  return data;
};
