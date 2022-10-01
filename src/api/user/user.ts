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
    return data;
  }
};
