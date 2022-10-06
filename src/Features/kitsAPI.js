import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const kitsAPI = createApi({
    reducerPath: "kitsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllKits: builder.query({
            query: () => '/kits'
        }),
        getKitsByField: builder.mutation({
            query: () => ({
                url : '/kits/all',
                method: 'GET'
            })
        })
    })
})

export default kitsAPI;
export const { useGetAllKitsQuery, useGetKitsByFieldMutation } = kitsAPI