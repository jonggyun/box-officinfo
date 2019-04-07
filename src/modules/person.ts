// imports
import { Dispatch } from 'redux';
import produce from 'immer';
import * as api from '../lib/api/people';

// actions
const GET_PERSON_REQUEST = 'person/GET_PERSON_REQUEST';
const GET_PERSON_SUCCESS = 'person/GET_PERSON_SUCCESS';
const GET_PERSON_FAIL = 'person/GET_PERSON_FAIL';

const GET_PERSON_DETAIL_REQUEST = 'person/GET_DETAIL_REQUEST';
const GET_PERSON_DETAIL_SUCCESS = 'person/GET_DETAIL_SUCCESS';
const GET_PERSON_DETAIL_FAIL = 'person/GET_DETAIL_FAIL';

export type PersonState = {
  loading: boolean;
  type?: string;
  people?: Object;
  peopleInfo?: {
    filmos: Array<{
      movieCd: string;
      movieNm: string;
      moviePartNm: string;
    }>;
    homepages: Array<Object>;
    peopleCd: string;
    peopleNm: string;
    peopleNmEn: string;
    repRoleNm: string;
  };
};

export const getPersonRequest = (payload: PersonState) => ({
  type: GET_PERSON_REQUEST,
  payload,
});

export const gerPersonSuccess = (payload: PersonState) => ({
  type: GET_PERSON_SUCCESS,
  payload,
});

export const getPersonFail = (payload: PersonState) => ({
  type: GET_PERSON_FAIL,
  payload,
});

export const getPersonDetailRequest = (payload: PersonState) => ({
  type: GET_PERSON_DETAIL_REQUEST,
  payload,
});

export const getPersonDetailSuccess = (payload: PersonState) => ({
  type: GET_PERSON_DETAIL_SUCCESS,
  payload,
});

export const getPersonDetailFail = (payload: PersonState) => ({
  type: GET_PERSON_DETAIL_FAIL,
  payload,
});

// api actions
export const getPerson = (peopleNm: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPersonRequest({ loading: true }));

      const result = await api.getPeople(peopleNm);
      const people = result.data.peopleListResult.peopleList;

      dispatch(gerPersonSuccess({ loading: false, people }));
    } catch (e) {
      dispatch(getPersonFail({ loading: false }));
    }
  };
};

export const getPersonDetail = (peopelCd: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPersonDetailRequest({ loading: true }));

      const result = await api.getPeopleInfo(peopelCd);
      const peopleInfo = result.data.peopleInfoResult.peopleInfo;

      dispatch(getPersonDetailSuccess({ loading: false, peopleInfo }));
    } catch (e) {
      dispatch(getPersonDetailFail({ loading: false }));
    }
  };
};

type Action = {
  type: string;
  payload: {
    loading: boolean;
    people: Array<{}>;
    peopleInfo: {
      filmos: Array<{
        movieCd: string;
        movieNm: string;
        moviePartNm: string;
      }>;
      homepages: Array<Object>;
      peopleCd: string;
      peopleNm: string;
      peopleNmEn: string;
      repRoleNm: string;
    };
  };
};
// initialState
const initialState: PersonState = {
  type: '',
  loading: false,
  people: [],
  peopleInfo: {
    filmos: [],
    homepages: [],
    peopleCd: '',
    peopleNm: '',
    peopleNmEn: '',
    repRoleNm: '',
  },
};

// reducer
const reducer = (state = initialState, action: Action): PersonState => {
  switch (action.type) {
    case GET_PERSON_REQUEST:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });
    case GET_PERSON_SUCCESS:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.people = action.payload.people;
      });
    case GET_PERSON_FAIL:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });

    case GET_PERSON_DETAIL_REQUEST:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });
    case GET_PERSON_DETAIL_SUCCESS:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.peopleInfo = action.payload.peopleInfo;
      });
    case GET_PERSON_DETAIL_FAIL:
      return produce(state, draft => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

// export reducer
export default reducer;
