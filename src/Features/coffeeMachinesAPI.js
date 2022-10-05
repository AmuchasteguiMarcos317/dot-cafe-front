import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const coffeeMachinesAPI = createApi({
    reducerPath: "coffeeMachinesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCoffeeMachines: builder.query({
            query: () => '/coffee-machine'
        }),
    })
})

export default coffeeMachinesAPI;
export const { useGetAllCoffeeMachinesQuery } = coffeeMachinesAPI