// imports
import { Dispatch } from 'redux';
import produce from 'immer';
import * as api from '../lib/api/movie';

// actions
const GET_MOVIES_REQUEST = 'movie/GET_MOVIES_REQUEST';
const GET_MOVIES_SUCCESS = 'movie/GET_MOVIES_SUCCESS';
const GET_MOVIES_FAILURE = 'movie/GET_MOVIES_FAILURE';

export type MovieState = {
  type: string;
  loading: boolean;
  movies?: Array<Object>;
};

export const getMovieRequest = (payload: MovieState) => ({
  type: GET_MOVIES_REQUEST,
  payload,
});

export const getMovieSuccess = (payload: MovieState) => ({
  type: GET_MOVIES_SUCCESS,
  payload,
});

export const getMovieFailure = (payload: MovieState) => ({
  type: GET_MOVIES_FAILURE,
  payload,
});

// api actions
export const getMovies = (movieNm: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getMovieRequest({ type: 'request', loading: true }));

      const result = await api.getMovies(movieNm);
      console.log(result);
      const movies = result.data.movieListResult.movieList;
      dispatch(getMovieSuccess({ type: 'success', loading: false, movies }));
    } catch (e) {
      dispatch(getMovieFailure({ type: 'fail', loading: false }));
    }
  };
};

// initialState
const initialState = {
  loading: false,
  movies: [],
  type: '',
};

// reducer
type Action = {
  type: string;
  payload: {
    type: string;
    loading: boolean;
    movies: [];
  };
};
const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return produce(state, draft => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
      });
    case GET_MOVIES_SUCCESS:
      return produce(state, draft => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
        draft.movies = action.payload.movies;
      });
    case GET_MOVIES_FAILURE:
      return produce(state, draft => {
        draft.type = action.payload.type;
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

// reducer function

// exports

// reducer exports

export default reducer;
