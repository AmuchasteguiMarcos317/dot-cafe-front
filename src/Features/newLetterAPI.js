import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiURL from '../api';

export const newLetterAPI = createApi ({
    reducerPath: "newLetterAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),

    endpoints: (builder) => ({
        addNewSubscriber: builder.mutation({
            query: (subscriber) => ({
                url: '/subscribers',
                method: 'POST',
                body: subscriber
            }) 
        }),
    })
})

export default newLetterAPI;
export const {useAddNewSubscriberMutation} = newLetterAPI
