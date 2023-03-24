export const SET_SEARCH_PARAMETERS = 'SET_SEARCH_PARAMETERS';

export const setSearchParameters = (checkIn, days) => ({ type: SET_SEARCH_PARAMETERS, payload: { checkIn, days} });
