import React from 'react';
import styled from 'styled-components';

import {
  DirectorType,
  ActorType,
  ShowtypeType,
  CompanyType,
  AuditType,
} from '../../lib/types/movieInfo';

import ShowTypes from './detail/ShowTypes';
import Genre from './detail/Genre';
import Companies from './detail/Companies';
import Directors from './detail/Directors';
import Actors from './detail/Actors';
// import Staffs from './detail/Staffs';

const Wrapper = styled.article`
  width: 37.5rem;
  & > section {
    margin-top: 0.625rem;
  }
`;

const TitleKR = styled.h1`
  font-size: 1.875rem;
  font-weight: 800;
  color: #002c27;
  margin: 0;
  & > span {
    font-size: 1.5625rem;
    font-weight: 600;
    color: #00796b;
  }
`;

const TitleEN = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: #00423b;
`;

interface MovieDetailProps {
  movieInfo: {
    movieNm: string;
    movieNmEn: string;
    showTm: number;
    prdtYear: number;
    openDt: string;
    genres: Array<{
      genreNm: string;
    }>;
    directors: Array<DirectorType>;
    actors: Array<ActorType>;
    showTypes: Array<ShowtypeType>;
    companys: Array<CompanyType>;
    audits: Array<AuditType>;
  };
}
const MovieDetail: React.SFC<MovieDetailProps> = ({ movieInfo }) => {
  const {
    movieNm,
    movieNmEn,
    showTm,
    prdtYear,
    openDt,
    genres,
    directors,
    actors,
    showTypes,
    companys,
    audits,
  } = movieInfo;
  return (
    <Wrapper>
      <TitleKR>
        {movieNm}
        <span>({prdtYear})</span>
      </TitleKR>
      <TitleEN>{movieNmEn}</TitleEN>
      {/* showTypes */}
      <ShowTypes showTypes={showTypes} />
      {/* genre */}
      <Genre genres={genres} showTm={showTm} openDt={openDt} />
      {/* company */}
      <Companies companys={companys} />
      {/* directors */}
      <Directors directors={directors} />
      {/* actors */}
      <Actors actors={actors} />
      {/* staffs */}
      {/* <Staffs /> */}
    </Wrapper>
  );
};

export default MovieDetail;
