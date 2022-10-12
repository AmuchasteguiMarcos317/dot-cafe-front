import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const orderAPI = createApi({
    reducerPath: "orderAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: () => '/orders'
        }),
        getOrderById: builder.query({
            query: (id) => '/orders/' + id
        }),
        getOrderByUser: builder.query({
            query: (user) =>'/orders?user='+user
        }),
        // getOrderByUser: builder.mutation({
        //     query(id){
        //         return{
        //             url: '/orders?user=' +id,
        //             method: 'GET'
        //         }
        //     }
        // }),
    })
})

export default orderAPI;
export const { useGetAllOrdersQuery, useGetOrderByIdQuery, useGetOrderByUserQuery } = orderAPI