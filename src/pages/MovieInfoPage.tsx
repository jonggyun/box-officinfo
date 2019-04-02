import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';

import MovieInfoContainer from '../containers/movieInfo/MovieInfoContainer';
import MovieDetailContainer from '../containers/movieInfo/MovieDetailContainer';

const MovieInfoContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;
interface MatchParams {
  movieCd: string;
}

interface MovieInfoPageProps extends RouteComponentProps<MatchParams> {}
const MovieInfoPage: React.SFC<MovieInfoPageProps> = props => {
  const { movieCd } = props.match.params;
  return (
    <MainTemplate>
      <MenuNavigator />
      <MovieInfoContent>
        {!movieCd ? (
          <MovieInfoContainer />
        ) : (
          <MovieDetailContainer movieCd={movieCd} />
        )}
      </MovieInfoContent>
    </MainTemplate>
  );
};

export default MovieInfoPage;
