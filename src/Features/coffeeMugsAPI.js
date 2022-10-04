import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const coffeeMugsAPI = createApi({
    reducerPath: "coffeeMugsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCoffeeMugs: builder.query({
            query: () => '/mugs'
        }),
    })
})

export default coffeeMugsAPI;
export const { useGetAllCoffeeMugsQuery } = coffeeMugsAPI