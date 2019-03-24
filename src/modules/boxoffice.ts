// imports
import { Dispatch } from 'redux';
import produce from 'immer';
import * as api from '../lib/api/boxoffice';

// actions
const GET_DAILY_REQUEST = 'boxoffice/GET_DAILY_REQUEST';
const GET_DAILY_SUCCESS = 'boxoffice/GET_DAILY_SUCCESS';
const GET_DAILY_FAIL = 'boxoffice/GET_DAILY_FAIL';

const GET_WEEKLY_REQUEST = 'boxoffice/GET_WEEKLY_REQUEST';
const GET_WEEKLY_SUCCESS = 'boxoffice/GET_WEEKLY_SUCCESS';
const GET_WEEKLY_FAIL = 'boxoffice/GET_WEEKLY_FAIL';

export type BoxofficeState = {
  readonly type?: string;
  readonly loading: boolean;
  readonly daily?: Object;
  readonly weekly?: Object;
};

export const getDailyRequest = (payload: BoxofficeState) => ({
  type: GET_DAILY_REQUEST,
  payload,
});
export const getDailySuccess = (payload: BoxofficeState) => ({
  type: GET_DAILY_SUCCESS,
  payload,
});
export const getDailyFail = (payload: BoxofficeState) => ({
  type: GET_DAILY_FAIL,
  payload,
});

export const getWeeklyRequest = (payload: BoxofficeState) => ({
  type: GET_WEEKLY_REQUEST,
  payload,
});
export const getWeeklySuccess = (payload: BoxofficeState) => ({
  type: GET_WEEKLY_SUCCESS,
  payload,
});
export const getWeeklyFail = (payload: BoxofficeState) => ({
  type: GET_WEEKLY_FAIL,
  payload,
});

// api actions
export const getDaily = (today: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getDailyRequest({ loading: true }));

      const result = await api.getDaily(today);
      const daily = result.data.boxOfficeResult.dailyBoxOfficeList;

      dispatch(getDailySuccess({ loading: false, daily }));
    } catch (e) {
      dispatch(getDailyFail({ loading: false }));
    }
  };
};

export const getWeekly = (today: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getWeeklyRequest({ loading: true }));

      const result = await api.getWeekly(today);
      const weekly = result.data.boxOfficeResult.weeklyBoxOfficeList;

      dispatch(getWeeklySuccess({ loading: false, weekly }));
    } catch (e) {
      dispatch(getDailyFail({ loading: false }));
    }
  };
};

type ObjectType = {
  movieCd: string;
  rank: number;
  rankInten: number;
  rankOldAndNew: string;
  movieNm: number;
  openDt: string;
  audiAcc: string;
};

type Action = {
  type: string;
  payload: {
    loading: boolean;
    daily: Array<ObjectType>;
    weekly: Array<ObjectType>;
  };
};

// initial state
const initalState: BoxofficeState = {
  type: '',
  loading: false,
  daily: [],
  weekly: [],
};

// reducer
const reducer = (state = initalState, action: Action): BoxofficeState => {
  switch (action.type) {
    case GET_DAILY_REQUEST:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });
    case GET_DAILY_SUCCESS:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.daily = action.payload.daily;
      });
    case GET_DAILY_FAIL:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });
    case GET_WEEKLY_REQUEST:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });
    case GET_WEEKLY_SUCCESS:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.weekly = action.payload.weekly;
      });
    case GET_WEEKLY_FAIL:
      return produce(state, draft => {
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
