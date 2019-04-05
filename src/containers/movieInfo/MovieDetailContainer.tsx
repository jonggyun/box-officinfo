import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  DirectorType,
  ActorType,
  ShowtypeType,
  CompanyType,
  AuditType,
} from '../../lib/types/movieInfo';

import { RootState } from '../../modules/reducers';
import { getMovieInfo } from '../../modules/movie';
import MovieDetail from '../../components/movieInfo/MovieDetail';

import LoadingSpinner from '../../components/common/LoadingSpinner';

/**
 * TO-DO: RE-Define movieInfo Type
 */
interface MovieDetailContainerProps {
  movieCd: string;
  // movieInfo: {
  //   movieNm: string;
  //   movieNmEn: string;
  //   showTm: number;
  //   openDt: string;
  //   genres: {
  //     genreNm: string;
  //   };
  //   directors: Array<DirectorType>;
  //   actors: Array<ActorType>;
  //   showTypes: Array<ShowtypeType>;
  //   companys: Array<CompanyType>;
  //   audits: Array<AuditType>;
  // };
  movieInfo: any;
  getMovieInfo: Function;
  loading: boolean;
}
const MovieDetailContainer: React.SFC<MovieDetailContainerProps> = ({
  movieCd,
  movieInfo,
  getMovieInfo,
  loading,
}) => {
  useEffect(() => {
    getMovieInfo(movieCd);
  }, [movieCd]);

  useEffect(() => {
    return () => {
      getMovieInfo('');
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        Object.keys(movieInfo).length > 0 && (
          <MovieDetail movieInfo={movieInfo} />
        )
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    movieInfo: state.movie.movieInfo,
    loading: state.movie.loading,
  }),
  { getMovieInfo },
)(MovieDetailContainer);
