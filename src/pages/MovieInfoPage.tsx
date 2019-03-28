import React, { useState } from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';
import MovieInfoContainer from '../containers/movieInfo/MovieInfoContainer';

const MovieInfoContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

interface MovieInfoPageProps {}
const MovieInfoPage: React.SFC<MovieInfoPageProps> = props => {
  return (
    <MainTemplate>
      <MenuNavigator />
      <MovieInfoContent>
        <MovieInfoContainer />
      </MovieInfoContent>
    </MainTemplate>
  );
};

export default MovieInfoPage;
