import customApi from './customApi';

const DEFAULT_ADD = 'company/';
const API_KEY = `key=${process.env.REACT_APP_API_KEY}`;

export const getCompany = () => {
  return customApi.get(`${DEFAULT_ADD}searchCompanyList.json?${API_KEY}`);
};

export const getCompanyInfo = (companyCd: string) => {
  return customApi.get(
    `${DEFAULT_ADD}searchCompanyInfo.json?${API_KEY}&companyCd=${companyCd}`
  );
};
