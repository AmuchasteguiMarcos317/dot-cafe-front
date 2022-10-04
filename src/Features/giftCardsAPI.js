import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const giftCardsAPI = createApi({
    reducerPath: "giftCardsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllGiftCards: builder.query({
            query: () => '/giftcard'
        }),
    })
})

export default giftCardsAPI;
export const { useGetAllGiftCardsQuery } = giftCardsAPI