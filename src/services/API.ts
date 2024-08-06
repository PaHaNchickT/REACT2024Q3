export function API() {
  const getFilms = async (inputData: { value: string; page: string }) => {
    let data
    await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=3000&keyword=${inputData.value}&page=${inputData.page}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((resp) => {
        data = resp.json()
      })
      .catch((err) => {
        console.log(err.text)
      })

    return data
  }

  const getFilm = async (id: string) => {
    let data
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        data = resp.json()
      })
      .catch((err) => {
        console.log(err.text)
      })

    return data
  }

  return Object.freeze({
    getFilms,
    getFilm,
  })
}
