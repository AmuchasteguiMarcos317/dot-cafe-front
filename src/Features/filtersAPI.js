import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const filtersAPI = createApi({
    reducerPath: "filtersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllFilters: builder.query({
            query: () => '/coffee-filters'
        }),
    })
})

export default filtersAPI;
export const { useGetAllFiltersQuery } = filtersAPI