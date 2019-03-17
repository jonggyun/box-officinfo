// imports
import { Dispatch } from 'redux';
import * as api from '../lib/api/boxoffice';

// actions
const GET_DAILY_REQUEST = 'boxoffice/GET_DAILY_REQUEST';
const GET_DAILY_SUCCESS = 'boxoffice/GET_DAILY_SUCCESS';
const GET_DAILY_FAIL = 'boxoffice/GET_DAILY_FAIL';

const getDailyRequest = (payload: any) => ({
  type: GET_DAILY_REQUEST,
  payload,
});
const getDailySuccess = (payload: any) => ({
  type: GET_DAILY_SUCCESS,
  payload,
});
const getDailyFail = (payload: any) => ({ type: GET_DAILY_FAIL, payload });

// api actions
export const getDaily = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await api.getDaily();
      console.log('result', result);
      dispatch(getDailySuccess(result));
    } catch (e) {
      console.log('err', e);
    }
  };
};

// export type State = {
//   readonly counter: number,
//   readonly baseCurrency: string,
// };
type State = {};

type Action = {
  type: string[];
  payload: Object;
};

// initial state
const initalState: State = {};

// reducer
const reducer = (state = initalState, action: Action): State => {
  switch (action.type) {
    case [GET_DAILY_REQUEST]:
      return { type: 'request', isLoading: action.payload };
    case [GET_DAILY_SUCCESS]:
      return { type: 'success', isLoading: action.payload };
    case [GET_DAILY_FAIL]:
      return { type: 'fail', isLoading: action.payload };
    default:
      return state;
  }
};

// reducer function

// exports

// reducer exports

export default reducer;
