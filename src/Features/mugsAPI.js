import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const mugsAPI = createApi({
    reducerPath: "mugsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllMugs: builder.query({
            query: () => '/mugs'
        }),
        getMugs: builder.mutation({
            query: () => ({
                url: `/mugs/all`,
                method: 'GET'
            })
        }),
        getMugsById: builder.mutation({
            query: (id) => ({
                url: `mugs/${id}`,
                method: 'GET'
            })
        })
    })
})

export default mugsAPI;
export const { useGetMugsMutation ,useGetAllMugsQuery, useGetMugsByIdMutation } = mugsAPI