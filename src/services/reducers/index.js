import { combineReducers } from 'redux';
import { hotelsReducer } from './hotels';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
  hotels: hotelsReducer,
  search: searchReducer,
})