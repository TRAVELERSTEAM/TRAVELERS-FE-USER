import { Cookies } from 'react-cookie';

const cookies = new Cookies();

interface Cookie {
  refreshToken: string;
}

export const setCookie = (refreshToken: Cookie) => {
  cookies.set('refreshToken', refreshToken, { sameSite: 'strict' });
};

export const getCookieToken = () => {
  return cookies.get('refreshToken');
};

export const removeCookie = () => {
  return cookies.remove('refreshToken');
};
