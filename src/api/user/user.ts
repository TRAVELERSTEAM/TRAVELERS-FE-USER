import axios from 'axios';
import { memberLogin } from '~/components/login/MemberLogin';
import { signUp } from '~/pages/SignUpPage';
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

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

interface token {
  accessToken: string;
  refreshToken: string;
}

const reissueApi = async (payload: token) => {
  const { accessToken, refreshToken } = payload;
  const { data } = await axios.post('http://43.200.38.193:8888/reissue', {
    accessToken,
    refreshToken,
  });
  return data;
};

export const signUpApi = async (payload: signUp) => {
  const {
    profile,
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

  const formData = new FormData();
  formData.append('file', profile[0]);

  const body = {
    username,
    birth,
    tel,
    gender,
    email,
    key,
    password,
    confirmPassword,
    groupTrip,
    area,
    theme,
    recommend,
  };

  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });

  formData.append('request', blob);

  const { data, status } = await axios({
    method: 'post',
    url: `${baseUrl}/register`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });

  console.log(data);
  localStorage.setItem('username', data.username);
  localStorage.setItem('profile', data.profile);

  if (status === 409) {
    alert('이미 존재하는 계정입니다.');
  }
  // return data;
};

export interface emailCertificationState {
  email: string;
}

export const emailCertification = async (payload: emailCertificationState) => {
  const { email } = payload;
  const { data } = await axios.post(`${baseUrl}/verify`, {
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
  const { data } = await axios.get(`${baseUrl}/verify/${email}/${key}`);
  if (data.status === 200) {
    return data;
  }
};

export interface FindEmailState {
  username: string;
  gender: string;
  birth: string;
}

export const findEmailApi = async (payload: FindEmailState) => {
  const { username, gender, birth } = payload;
  const { data } = await axios.post(`${baseUrl}/find_email`, {
    username,
    gender,
    birth,
  });

  localStorage.setItem('email', data.email);
  return data;
};

export interface FindPasswordState {
  username: string;
  gender: string;
  birth: string;
  tel: string;
  email: string;
  key: string;
}

export const findPasswordApi = async (payload: FindPasswordState) => {
  const { username, gender, birth, tel, email, key } = payload;
  const { data } = await axios.post(`${baseUrl}/find_password`, {
    username,
    gender,
    birth,
    tel,
    email,
    key,
  });

  return data;
};
