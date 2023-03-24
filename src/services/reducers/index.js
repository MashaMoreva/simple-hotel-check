import { combineReducers } from 'redux';
import { hotelsReducer } from './hotels';
import { searchReducer } from './search';
import { favouritesReducer } from './favourites';

export const rootReducer = combineReducers({
  hotels: hotelsReducer,
  search: searchReducer,
  favourites: favouritesReducer,
})