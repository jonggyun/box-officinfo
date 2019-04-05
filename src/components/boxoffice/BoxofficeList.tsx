import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { breakpoints } from '../../lib/styles/responsive';

const Boxoffice = styled.article`
  color: #00423b;
  margin: 0 1rem;
  @media screen and (min-width: ${breakpoints.phone}) {
    width: 31.25rem;
    margin: 0 2rem;
  }
`;

const ListTitle = styled.div`
  text-align: center;
  margin: 1.875rem 0;
  font-size: 2rem;
  font-weight: 800;
`;

const MovieUl = styled.ul``;

const MovieLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 5.3125rem;
  border-radius: 0.25rem;
  border: 0.5px solid #d0e6e4;
  box-shadow: 0.125rem 0.1875rem #8bc2bb;
  margin-bottom: 1.875rem;
  color: #004e45;
  a {
    display: flex;
  }
  &:hover {
    box-shadow: 3px 3px #000;
  }
`;

const MovieRank = styled.div`
  /* 순위 */
  width: 4.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 0.3125rem;
  text-align: center;
  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 3rem;
  }
  div:first-child {
    font-size: 1.5625rem;
    font-weight: bold;
    @media screen and (max-width: ${breakpoints.desktop}) {
      font-size: 1.25rem;
    }
  }

  div:last-child {
    font-size: 0.8125rem;
    @media screen and (max-width: ${breakpoints.desktop}) {
      font-size: 0.625rem;
    }
  }
`;

const MovieTitle = styled.div`
  /* 제목 */
  font-size: 1.5rem;
  margin-top: auto;
  margin-bottom: auto;
  /* max-width: 55%; */
  cursor: pointer;
  color: #004e45;
  @media screen and (max-width: ${breakpoints.desktop}) {
    font-size: 1.125rem;
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const MovieInfo = styled.div`
  /* 정보 */
  text-align: right;
  min-width: 7.5rem;
  font-size: 0.8125rem;
  margin-top: auto;
  margin-bottom: 0.625rem;
  margin-right: 0.625rem;
  color: #868e96;
  @media screen and (max-width: ${breakpoints.desktop}) {
    font-size: 0.625rem;
    min-width: 0rem;
  }
`;
interface RankProps {
  type: string;
}
const Rank = styled.span`
  color: ${(props: RankProps) => (props.type === 'up' ? '#c92a2a' : '#1864ab')};
`;

interface BoxofficeListProps {
  type: string;
  boxoffice: Array<{
    movieCd: string;
    rank: number;
    rankInten: number;
    rankOldAndNew: string;
    movieNm: string;
    openDt: string;
    audiAcc: string;
  }>;
}
const BoxofficeList: React.FC<BoxofficeListProps> = ({ type, boxoffice }) => {
  return (
    <Boxoffice>
      <ListTitle>{type === 'daily' ? 'Daily Chart' : 'Weekly Chart'}</ListTitle>
      <MovieUl>
        {boxoffice.map(movie => (
          <MovieComponent
            key={movie.movieCd}
            movieCd={movie.movieCd}
            rank={movie.rank}
            rankInten={movie.rankInten}
            rankOldAndNew={movie.rankOldAndNew}
            movieNm={movie.movieNm}
            openDt={movie.openDt}
            audiAcc={movie.audiAcc}
          />
        ))}
      </MovieUl>
    </Boxoffice>
  );
};

interface MovieComponent {
  movieCd: string;
  rank: number;
  rankInten: number;
  rankOldAndNew: string;
  movieNm: string;
  openDt: string;
  audiAcc: string;
}
const MovieComponent = (props: MovieComponent) => (
  <MovieLi>
    <MovieRank>
      <div>{props.rank}</div>
      <div>
        {Number(props.rankInten) === 0 ? (
          <FontAwesomeIcon icon="minus" />
        ) : props.rankInten >= 0 ? (
          <Rank type="up">
            <FontAwesomeIcon icon="arrow-up" /> {Math.abs(props.rankInten)}
          </Rank>
        ) : (
          <Rank type="down">
            <FontAwesomeIcon icon="arrow-down" /> {Math.abs(props.rankInten)}
          </Rank>
        )}
      </div>
    </MovieRank>
    <Link to={`/movie/${props.movieCd}`}>
      <MovieTitle>
        {props.movieNm.length < 13
          ? props.movieNm
          : props.movieNm.slice(0, 13).concat('...')}
      </MovieTitle>
    </Link>
    <MovieInfo>
      <div>{props.openDt.replace(/-/g, '.')} 개봉</div>
      <div>누적 {props.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명</div>
    </MovieInfo>
  </MovieLi>
);
export default BoxofficeList;
