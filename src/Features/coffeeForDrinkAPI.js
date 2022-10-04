import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const coffeeForDrinkAPI = createApi({
    reducerPath: "coffeeForDrinkAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllCoffeeForDrink: builder.query({
            query: () => '/kits'
        }),
    })
})

export default coffeeForDrinkAPI;
export const { useGetAllCoffeeForDrinkQuery } = coffeeForDrinkAPI