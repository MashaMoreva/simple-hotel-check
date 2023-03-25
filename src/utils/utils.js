export const options = { day: 'numeric', month: 'long', year: 'numeric' };

export const request = async ( location, checkIn, checkOut ) => {
  const res = await fetch(location, checkIn, checkOut )
  return handleResponse(res)
}

const handleResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return res.json()
    .then(function (err) {
      err.code = res.status;
      return Promise.reject(`Ошибка: ${res.status}`)
    });
}

export function searchDeleteItem(array, item) {
  return array.filter((obj) =>
      obj.hotelId !== item.hotelId);
}

export const filterObjectArray = (arr, filterArr) => (
  arr.filter( el =>
      filterArr.some( f =>
          f.hotelId === el.hotelId
      )
  )
);