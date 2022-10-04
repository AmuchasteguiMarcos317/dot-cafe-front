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
    })
})

export default kitsAPI;
export const { useGetAllKitsQuery } = kitsAPI