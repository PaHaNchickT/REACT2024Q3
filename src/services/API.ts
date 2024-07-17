import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FilmObj } from '../components/types'

export const filmsAPI = createApi({
  reducerPath: 'filmsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    method: 'GET',
    headers: {
      'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<{ items: FilmObj[]; total: number; totalPages: number }, string>({
      query: (data) => `?order=NUM_VOTE&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=3000&${data}`,
    }),
    getFilm: builder.query<FilmObj, string>({
      query: (id) => `/${id}`,
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmQuery } = filmsAPI
