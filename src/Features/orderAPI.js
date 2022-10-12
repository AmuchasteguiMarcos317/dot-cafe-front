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
        newOrder: builder.mutation({
            query(order){
                return{
                    url: '/orders',
                    method: 'POST',
                    body: order
                }
            }
        }),
        deleteOrder: builder.mutation({
            query(id){
                return{
                    url: `/orders/delete-order/${id}`,
                    method: 'DELETE'
                }
            }
        })
    })
})

export default orderAPI;
export const { useDeleteOrderMutation ,useGetAllOrdersQuery, useGetOrderByIdQuery, useGetOrderByUserQuery, useNewOrderMutation } = orderAPI