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
        getFiltersByField: builder.mutation({
            query: () => ({
                url: '/coffee-filters/all',
                method: 'GET'
            })
        })
    })
})

export default filtersAPI;
export const { useGetAllFiltersQuery, useGetFiltersByFieldMutation } = filtersAPI