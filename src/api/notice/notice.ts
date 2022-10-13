import axios from 'axios';

export const noticeApi = async () => {
  const { data } = await axios.get('http://www.gotogether.gq/notify/notice');
  return data;
};

export const noticeIdApi = async (id: number | null) => {
  const { data } = await axios.get(`http://www.gotogether.gq/notify/notice/${id}`);
  return data;
};
