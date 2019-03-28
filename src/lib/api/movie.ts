import customApi from './customApi';

const DEFAULT_ADD = 'movie/';
const API_KEY = `key=${process.env.REACT_APP_API_KEY}`;

export const getMovies = (movieNm: string) => {
  return customApi.get(
    `${DEFAULT_ADD}searchMovieList.json?${API_KEY}&movieNm=${movieNm}`,
  );
};

export const getMovieInfo = (movieCd: string) => {
  return customApi.get(
    `${DEFAULT_ADD}searchMovieInfo.json?${API_KEY}&movieCd=${movieCd}`,
  );
};
