import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const coffeeForDrinkAPI = createApi({
    reducerPath: "coffeeForDrinkAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCoffeeForDrink: builder.query({
            query: () => '/coffee'
        }),
        getCoffeeSearch: builder.query({
            query: (input) => `/coffee?size=${input[0]}&type=${input[1]}` 
        }),
    })
})

export default coffeeForDrinkAPI;
export const { useGetAllCoffeeForDrinkQuery, useGetCoffeeSearchQuery } = coffeeForDrinkAPI