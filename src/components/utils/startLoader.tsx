export async function startLoader() {
  const resp = await (
    await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1', {
      method: 'GET',
      headers: {
        'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
        'Content-Type': 'application/json',
      },
    })
  ).json()

  return { resp }
}
