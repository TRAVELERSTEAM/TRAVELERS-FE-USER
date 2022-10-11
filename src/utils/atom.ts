import { atom } from 'recoil';

export const UserName = atom({
  key: 'username',
  default: localStorage.getItem('username'),
});

export const Profile = atom({
  key: 'profile',
  default: localStorage.getItem('profile'),
});

export const isSuccessState = atom({
  key: 'isSuccess',
  default: false,
});
