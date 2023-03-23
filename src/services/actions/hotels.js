import { baseUrl } from "../../utils/constants";
import { request } from "../../utils/utils";

// export const GET_HOTELS_REQUEST = 'GET_HOTELS_REQUEST';
export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
// export const GET_HOTELS_FAILED = 'GET_HOTELS_FAILED';

export const getHotelsSuccess = (data) => ({
    type: GET_HOTELS_SUCCESS,
    payload: data,
})

export const getHotels = (location, checkIn, checkOut) => {
    const url = `${baseUrl}?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
    return (dispatch) => {
        request(url)
            .then((data) => {
                dispatch(getHotelsSuccess(data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
