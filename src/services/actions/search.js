export const SET_SEARCH_PARAMETERS = 'SET_SEARCH_PARAMETERS';

export const setSearchParameters = ({location, checkIn, days}) => ({ type: SET_SEARCH_PARAMETERS, payload: {location, checkIn, days} });
