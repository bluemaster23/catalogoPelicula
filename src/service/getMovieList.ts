// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const movieList = createApi({
  reducerPath: 'movieListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/movie' }),
  endpoints: (builder) => ({
    getMovieList: builder.query({
      query: (data) => `/${data.name}?api_key=d82a8c095b2c0ad289608ce1a1349b3b&language=es-CO&page=${data.page}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieListQuery } = movieList