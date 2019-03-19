// imports
import { Dispatch } from 'redux';
import produce from 'immer';
import * as api from '../lib/api/boxoffice';

// actions
const GET_DAILY_REQUEST = 'boxoffice/GET_DAILY_REQUEST';
const GET_DAILY_SUCCESS = 'boxoffice/GET_DAILY_SUCCESS';
const GET_DAILY_FAIL = 'boxoffice/GET_DAILY_FAIL';

const getDailyRequest = () => ({ type: GET_DAILY_REQUEST });

const getDailySuccess = (payload: any) => ({
  type: GET_DAILY_SUCCESS,
  payload,
});

const getDailyFail = () => ({ type: GET_DAILY_FAIL });

// api actions
export const getDaily = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await api.getDaily('20190310');
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
type State = {
  type: string;
  list: Object;
};

type Action = {
  type: string;
  payload: Object;
};

// initial state
const initalState: State = {
  type: '',
  list: [],
};

// reducer
const reducer = (state = initalState, action: Action): State => {
  switch (action.type) {
    case GET_DAILY_REQUEST:
      return produce(state, draft => {
        draft.type = 'request';
        draft.list = action;
      });
    case GET_DAILY_SUCCESS:
      return produce(state, draft => {
        draft.type = 'success';
        draft.list = action.payload;
      });
    case GET_DAILY_FAIL:
      return produce(state, draft => {
        draft.type = 'fail';
        draft.list = action;
      });
    default:
      return state;
  }
};

// reducer function

// exports

// reducer exports

export default reducer;
