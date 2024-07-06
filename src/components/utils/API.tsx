export default class API {
  async start() {
    let data
    await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
      method: 'GET',
      headers: {
        'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
        'Content-Type': 'application/json',
      },
    }).then((resp) => {
      data = resp
    })

    return data
  }

  search(value: string) {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/search-by-keyword?keyword=${value}&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
        'Content-Type': 'application/json',
      },
    })
  }
}
