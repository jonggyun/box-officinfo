import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../modules/reducers';
import { getMovieInfo } from '../../modules/movie';
import MovieDetail from '../../components/movieInfo/MovieDetail';

import LoadingSpinner from '../../components/common/LoadingSpinner';

interface MovieDetailContainerProps {
  movieCd: string;
  movieInfo?: Object;
  getMovieInfo: Function;
}
const MovieDetailContainer: React.SFC<MovieDetailContainerProps> = ({
  movieCd,
  movieInfo,
  getMovieInfo,
}) => {
  // useEffect(() => {
  //   getMovieInfo(movieCd);
  // }, [movieCd]);

  console.log('movieInfo', movieInfo);
  return <MovieDetail />;
};

export default connect(
  (state: RootState, props) => ({
    movieInfo: state.movie.movieInfo,
  }),
  { getMovieInfo },
)(MovieDetailContainer);
