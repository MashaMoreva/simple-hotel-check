import { ADD_HOTEL, DELETE_HOTEL } from "../actions/favourites"

const initialState = {
    favourites: JSON.parse(localStorage.getItem('favourites')) || []
}

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOTEL: {
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        }
        case DELETE_HOTEL: {
            return {
                ...state,
                favourites: state.favourites.filter((hotel) => hotel.hotelId !== action.payload.hotelId) 
            }
        }
        default: {
            return state;
        }
    }
}