import customApi from './customApi';

const DEFAULT_ADD = 'boxoffice/';
const API_KEY = 'key=570154ebefb74604c4d915f758a2f753';

export const getDaily = () => {
  console.log('api!!!');
  return customApi.get(
    `${DEFAULT_ADD}searchDailyBoxOfficeList.json?${API_KEY}&targetDt=20120101`
  );
};
