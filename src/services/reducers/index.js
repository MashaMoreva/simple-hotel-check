import { combineReducers } from 'redux';
import { hotelsReducer } from './hotels';

export const rootReducer = combineReducers({
  hotels: hotelsReducer
})