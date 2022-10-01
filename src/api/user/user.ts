import axios from 'axios';
import { memberLogin } from '~/components/login/MemberLogin';

export const loginApi = async (payload: memberLogin) => {
  const { email, password } = payload;
  const { data } = await axios.post('http://43.200.38.193:8888/login', {
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
