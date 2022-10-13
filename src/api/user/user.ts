import axios from 'axios';
import { memberLogin } from '~/components/login/MemberLogin';
import { signUp } from '~/pages/SignUpPage';
const baseUrl = import.meta.env.VITE_APP_BASE_URL;
// const token = import.meta.env.VITE_APP_TOKEN;
const token = localStorage.getItem('accessToken');

export const loginApi = async (payload: memberLogin) => {
  const { email, password } = payload;
  const { data, status } = await axios.post(
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

  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);

  if (status === 401) {
    alert('아이디 또는 비밀번호를 확인해주세요');
  }
  // 엑세스토큰 만료시 재요청
  if (data.status === 500) {
    await reissueApi(data);
  }

  return data;
};

export const logOut = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export interface token {
  accessToken: string;
  refreshToken: string;
}

const reissueApi = async (payload: token) => {
  const { accessToken, refreshToken } = payload;
  const { data } = await axios.post(`${baseUrl}/reissue`, {
    accessToken,
    refreshToken,
  });
  return data;
};

export const checkToken = async (payload: token) => {
  const { accessToken, refreshToken } = payload;
  if (axios.defaults.headers.common['Authorization'] === undefined) {
    return await reissueApi({ accessToken, refreshToken });
  } else {
    return axios.defaults.headers.common['Authorization'] === ' ';
  }
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

export interface EditInfoState {
  profile: string;
  username: string;
  birth: string;
  gender: string;
  tel: string;
  email: string;
  currentPassword?: string;
  changePassword?: string;
  confirmChangePassword?: string;
  groupTrip?: string[];
  area?: string[];
  theme?: string[];
}

export const editInfoApi = async (payload: EditInfoState) => {
  const {
    profile,
    username,
    birth,
    gender,
    tel,
    email,
    currentPassword,
    changePassword,
    confirmChangePassword,
    groupTrip,
    area,
    theme,
  } = payload;

  const formData = new FormData();
  formData.append('file', profile[0]);

  const body = {
    username,
    birth,
    tel,
    gender,
    email,
    currentPassword,
    changePassword,
    confirmChangePassword,
    groupTrip,
    area,
    theme,
  };

  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });

  formData.append('request', blob);

  const { data } = await axios({
    method: 'put',
    url: `${baseUrl}/user`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  });

  return data;
};

export const myInfoApi = async () => {
  const { data } = await axios.get(`${baseUrl}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteAccountApi = async () => {
  const { data } = await axios.delete(`${baseUrl}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
