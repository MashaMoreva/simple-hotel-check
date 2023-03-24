export const ADD_HOTEL = 'ADD_HOTEL';
export const DELETE_HOTEL = 'DELETE_HOTEL';

export const addHotel = (hotel) => ({ type: ADD_HOTEL, payload: hotel });
export const deleteHotel = (hotel) => ({ type: DELETE_HOTEL, payload: hotel });