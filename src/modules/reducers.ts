import { combineReducers } from 'redux';

import boxoffice, { BoxofficeState } from './boxoffice';

const reducers = combineReducers({
  boxoffice,
});

export default reducers;

export interface RootState {
  boxoffice: BoxofficeState;
}
