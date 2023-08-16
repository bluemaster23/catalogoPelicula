// Need to use the React-specific entry point to import createApi
import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const movieList = createApi({
  reducerPath: 'movieListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovieList: builder.query({
      query: (data) => `movie/${data.name}?api_key=xxxxx&language=es-ES&page=${data.page}`,
    }),
    getMovieSearch :builder.query({
      query: (data) => `search/movie?api_key=xxxx&language=es-ES&page=1&query=${data.name}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieListQuery , useGetMovieSearchQuery } = movieList
