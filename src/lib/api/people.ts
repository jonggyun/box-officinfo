import customApi from './customApi';

const DEFAULT_ADD = 'people/';
const API_KEY = `key=${process.env.REACT_APP_API_KEY}`;

export const getPeople = () => {
  return customApi.get(`${DEFAULT_ADD}searchPeopleList.json?${API_KEY}`);
};

export const getPeopleInfo = (peopleCd: string) => {
  return customApi.get(
    `${DEFAULT_ADD}searchPeopleInfo.json?${API_KEY}&peopleCd=${peopleCd}`
  );
};
