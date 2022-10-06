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
        getTypeCoffeeMachines: builder.query({
            query: (type) => '/coffee-machine?type=' + type
        }),
        getMachineByField: builder.mutation({
            query: () => ({
                url: '/coffee-machine/all',
                method: 'GET'
            })
        })
    })
})

export default coffeeMachinesAPI;
export const { useGetAllCoffeeMachinesQuery, useGetTypeCoffeeMachinesQuery, useGetMachineByFieldMutation } = coffeeMachinesAPI