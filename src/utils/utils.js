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

export const createRightEndingHotel = (number) => {
  const titles = ["отель", "отеля", "отелей"];
  const cases = [2, 0, 1, 1, 1, 2];
  return `${
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }`;
};

export const createRightEndingDay = (number) => {
  const titles = ["день", "дня", "дней"];
  const cases = [2, 0, 1, 1, 1, 2];
  return `${
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }`;
};

// function morph(int, array) {
//   return (array = array || ['товар', 'товара', 'товаров']) 
//   && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
// }