import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../modules/reducers';
import MovieInfoList from '../../components/movieInfo/MovieInfoList';
import { getMovies } from '../../modules/movie';
import LoadingSpinner from '../../components/common/LoadingSpinner';

interface MovieInfoContainerProps {
  type: string;
  loading: boolean;
  movies: Array<Object> | undefined;
  getMovies: Function;
}
const MovieInfoContainer: React.SFC<MovieInfoContainerProps> = ({
  movies,
  getMovies,
}) => {
  const [keyword, setKeyword] = useState('');
  // const [movies, setMovies] = useState([]);

  const handleOnSubmit = () => {
    getMovies(keyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const { key } = e;

    if (key === 'Enter') {
      handleOnSubmit();
    }
  };
  return (
    <MovieInfoList
      keyword={keyword}
      setKeyword={setKeyword}
      handleKeyPress={handleKeyPress}
    />
  );
};

export default connect(
  (state: RootState, props) => ({
    type: state.movie.type,
    loading: state.movie.loading,
    movies: state.movie.movies,
  }),
  { getMovies },
)(MovieInfoContainer);
