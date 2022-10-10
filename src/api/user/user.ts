import axios from 'axios';
import { memberLogin } from '~/components/login/MemberLogin';
import { signUp } from '~/pages/SignUpPage';
import { setCookie } from '~/utils/cookie';
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const loginApi = async (payload: memberLogin) => {
  const { email, password } = payload;
  const { data } = await axios.post(
    `${baseUrl}/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );
  console.log(data);
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

  setCookie(data.refreshToken);

  if (data.status === 401) {
    alert('아이디 또는 비밀번호를 확인해주세요');
  }
  // 엑세스토큰 만료시 재요청
  if (
    // axios.defaults.headers.common['Authorization'] === undefined ||
    // data.refreshToken === undefined
    data.status === 500
  ) {
    await reissueApi(data);
  }

  return data;
};

interface token {
  accessToken: string;
  refreshToken: string;
}

const reissueApi = async (payload: token) => {
  const { accessToken, refreshToken } = payload;
  const { data } = await axios.post(`${baseUrl}/reissue`, {
    accessToken,
    refreshToken,
  });

  axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
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
  formData.append('files', profile[0]);

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

  const { data } = await axios({
    method: 'post',
    url: `${baseUrl}/register`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
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
  if (data.status === 200) {
    return data;
  }
};
