import React from 'react';
import styled from 'styled-components';

import ShowTypes from './detail/ShowTypes';
import Genre from './detail/Genre';
import Companies from './detail/Companies';
import Directors from './detail/Directors';
import Actors from './detail/Actors';
import Staffs from './detail/Staffs';

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

interface MovieDetailProps {}
const MovieDetail: React.SFC<MovieDetailProps> = props => {
  return (
    <Wrapper>
      <TitleKR>
        영화이름(한글)<span>(2019)</span>
      </TitleKR>
      <TitleEN>영화이름(영어)</TitleEN>
      {/* showTypes */}
      <ShowTypes />
      {/* genre */}
      <Genre />
      {/* company */}
      <Companies />
      {/* directors */}
      <Directors />
      {/* actors */}
      <Actors />
      {/* staffs */}
      {/* <Staffs /> */}
    </Wrapper>
  );
};

export default MovieDetail;
