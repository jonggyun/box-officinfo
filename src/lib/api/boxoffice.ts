import customApi from './customApi';

const DEFAULT_ADD = 'boxoffice/';
const API_KEY = `key=${process.env.REACT_APP_API_KEY}`;

export const getDaily = (targetDt: string) => {
  return customApi.get(
    `${DEFAULT_ADD}searchDailyBoxOfficeList.json?${API_KEY}&targetDt=${targetDt}`
  );
};

export const getWeekly = (targetDt: string) => {
  return customApi.get(
    `${DEFAULT_ADD}searchWeeklyBoxOfficeList.json?${API_KEY}&targetDt=${targetDt}`
  );
};
