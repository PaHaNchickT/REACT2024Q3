export function API() {
  const start = async (page: number) => {
    let data
    await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`, {
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
        throw new Error(err.text)
      })

    return data
  }

  const search = async (value: string, page: number) => {
    let data
    await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${value}&page=${page}`,
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
        throw new Error(err.text)
      })

    return data
  }

  const getFilmInfo = async (id: number) => {
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
        throw new Error(err.text)
      })

    return data
  }

  const fakeRequest = async () => {
    let data
    await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1', {
      method: 'GET',
    })
      .then((resp) => {
        data = resp.json()
      })
      .catch((err) => {
        throw new Error(err.text)
      })

    return data
  }

  return Object.freeze({
    start,
    search,
    getFilmInfo,
    fakeRequest,
  })
}
