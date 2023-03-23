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