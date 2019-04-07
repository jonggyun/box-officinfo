import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DoNotHaveItem from '../common/DoNotHaveItem';

const Keyword = styled.input`
  width: 37.5rem;
  height: 3.125rem;
  box-sizing: border-box;
  border: 0.3125rem solid #00796b;
  font-size: 1.25rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 1rem;
    text-indent: 0.625rem;
  }
`;

const MovieSection = styled.section`
  margin-top: 1.25rem;
`;

const MovieComponent = styled.article`
  width: 31.25rem;
  border: 0.0625rem solid #d0e6e4;
  border-radius: 0.1875rem;
  box-shadow: 0.125rem 0.1875rem #8bc2bb;
  color: #003731;
  p {
    margin: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
  }
  &:hover {
    box-shadow: 2px 2px 10px 2px #000;
  }
`;

const MovieTitles = styled.div`
  font-size: 1.5625rem;
  font-weight: 800;
  padding: 1rem;
  cursor: pointer;
  p:last-child {
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

const MovieInfo = styled.div`
  font-size: 0.75rem;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

interface MovieInfoListProps {
  keyword: string;
  setKeyword: Function;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  movies:
    | Array<{
        movieCd: string;
        movieNm: string;
        movieNmEn: string;
        openDt: string;
        genreAlt: string;
        directors:
          | Array<{
              peopleNm: string;
            }>
          | undefined;
      }>
    | undefined;
}
const MovieInfoList: React.SFC<MovieInfoListProps> = ({
  keyword,
  setKeyword,
  handleKeyPress,
  movies,
}) => {
  return (
    <>
      <Keyword
        type="text"
        value={keyword}
        placeholder="영화 제목을 입력해주세요."
        onChange={e => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <MovieSection>
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard
              key={movie.movieCd}
              movieCd={movie.movieCd}
              movieNm={movie.movieNm}
              movieNmEn={movie.movieNmEn}
              openDt={movie.openDt}
              genreAlt={movie.genreAlt}
              directors={movie.directors}
            />
          ))
        ) : (
          <DoNotHaveItem />
        )}
      </MovieSection>
    </>
  );
};

interface MovieCardProps {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  openDt: string;
  genreAlt: string;
  directors:
    | Array<{
        peopleNm: string;
      }>
    | undefined;
}
const MovieCard: React.SFC<MovieCardProps> = ({
  movieCd,
  movieNm,
  movieNmEn,
  openDt,
  genreAlt,
  directors,
}) => {
  return (
    <div>
      <MovieComponent>
        <Link to={`movie/${movieCd}`}>
          <MovieTitles>
            <p>{movieNm}</p>
            <p>{movieNmEn}</p>
          </MovieTitles>
        </Link>
        <MovieInfo>
          <p>
            감독:{' '}
            {directors && directors.length > 0
              ? directors.map((director, index) => {
                  return directors.length - 1 === index
                    ? director.peopleNm
                    : director.peopleNm + ', ';
                })
              : '정보없음'}
          </p>
          <p>장르: {genreAlt}</p>
          <p>
            개봉:{' '}
            {openDt
              ? openDt.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')
              : '정보없음'}
          </p>
        </MovieInfo>
      </MovieComponent>
      
    </div>
  );
};

export default MovieInfoList;
