import { combineReducers } from 'redux';

import boxoffice, { BoxofficeState } from './boxoffice';
import movie, { MovieState } from './movie';
import person, { PersonState } from './person';

const reducers = combineReducers({
  boxoffice,
  movie,
  person,
});

export default reducers;

export interface RootState {
  boxoffice: BoxofficeState;
  movie: MovieState;
  person: PersonState;
}
