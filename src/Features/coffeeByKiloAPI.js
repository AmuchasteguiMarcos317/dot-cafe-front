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
        getCaffeeByField: builder.mutation({
            query: () => ({
                url: '/coffee-kilogram/all',
                method: 'GET'
            })
        })
    })
})
export default coffeeByKiloAPI;
export const { useGetAllCoffeeByKiloQuery, useGetCoffeeByWeightQuery, useGetCaffeeByFieldMutation } = coffeeByKiloAPI

