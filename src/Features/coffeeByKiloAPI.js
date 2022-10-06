import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const coffeeByKiloAPI = createApi({
    reducerPath: "coffeeByKiloAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCoffeeByKilo: builder.query({
            query: () => '/coffee-kilogram'
        }),
        getCoffeeByWeight: builder.query({
            query: (kilo) => '/coffee-kilogram?weight=' + kilo
        }),
        getCoffeeByOrigin: builder.query({
            query: (region) => '/coffee-kilogram?origin=' + region
        }),
    })
})

export default coffeeByKiloAPI;
export const { useGetAllCoffeeByKiloQuery, useGetCoffeeByWeightQuery, useGetCoffeeByOriginQuery } = coffeeByKiloAPI