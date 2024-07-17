import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FilmObj } from '../components/types'

export const filmsAPI = createApi({
  reducerPath: 'filmsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/',
    method: 'GET',
    headers: {
      'X-API-KEY': 'fe77bc0c-1287-4d70-adb2-d5f3b64ee3e7',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: (builder) => ({
    getAllFilms: builder.query<{ items: FilmObj[]; total: number; totalPages: number }, string>({
      query: (page) => `collections?type=TOP_250_MOVIES&page=${page}`,
    }),
  }),
})

export const { useGetAllFilmsQuery } = filmsAPI
