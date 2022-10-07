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
    })
})

export default mugsAPI;
export const { useGetAllMugsQuery } = mugsAPI