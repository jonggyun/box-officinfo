import * as React from 'react';
import styled from 'styled-components';

const Boxoffice = styled.article`
  width: 31.25rem;
  margin: 0 2rem;
`;

const ListTitle = styled.div`
  text-align: center;
  padding: 1.25rem 0;
  font-size: 2rem;
  font-weight: 800;
`;

const MovieUl = styled.ul``;

const MovieLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 85px;
  /* border: 1px solid #8bc2bb; */
  border-radius: 4px;
  box-shadow: 2px 3px #d0e6e4;
  margin-bottom: 30px;

  /* 순위 */
  & > div:nth-child(1) {
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;
    text-align: center;

    div:first-child {
      font-size: 25px;
      font-weight: bold;
    }

    div:last-child {
      font-size: 13px;
    }
  }
  /* 제목 */
  & > div:nth-child(2) {
    font-size: 1.5rem;
    margin-top: auto;
    margin-bottom: auto;
    max-width: 55%;
  }

  /* 정보 */
  & > div:nth-child(3) {
    text-align: right;
    min-width: 7.5rem;
    font-size: 0.8125rem;
    margin-top: auto;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;

interface BoxofficeListProps {
  type: string;
  boxoffice: Array<{
    movieCd: string;
    rank: number;
    rankInten: number;
    rankOldAndNew: string;
    movieNm: number;
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
  rank: number;
  rankInten: number;
  rankOldAndNew: string;
  movieNm: number;
  openDt: string;
  audiAcc: string;
}
const MovieComponent = (props: MovieComponent) => (
  <MovieLi>
    <div>
      <div>{props.rank}</div>
      <div>{props.rankInten}</div>
    </div>
    <div>{props.movieNm}</div>
    <div>
      <div>{props.openDt.replace(/-/g, '.')} 개봉</div>
      <div>누적 {props.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명</div>
    </div>
  </MovieLi>
);
export default BoxofficeList;
