import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const coffeeByKiloAPI = createApi({
    reducerPath: "coffeeByKiloAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCoffeeByKilo: builder.query({
            query: () => '/kits'
        }),
    })
})

export default coffeeByKiloAPI;
export const { useGetAllCoffeeByKiloQuery } = coffeeByKiloAPI