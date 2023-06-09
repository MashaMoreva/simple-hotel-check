import { SET_SEARCH_PARAMETERS } from "../actions/search"

const initialState = {
    location: 'Москва',
    checkIn: new Date().toISOString().slice(0, 10),
    days: 1
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_PARAMETERS: {
            return {
                ...state,
                location: action.payload.location,
                checkIn: action.payload.checkIn,
                days: action.payload.days
            }
        }
        default: {
            return state;
        }
    }
}
