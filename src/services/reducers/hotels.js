import { GET_HOTELS_SUCCESS } from "../actions/hotels";

export const initialState = {
    hotels: []
}

export const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOTELS_SUCCESS: {
            return {
                ...state,
                hotels: [...action.payload]
            }
        }
        default: {
            return state;
        }
    }
}
