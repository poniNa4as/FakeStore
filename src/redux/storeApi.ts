import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartFromServer } from "../components/utilutes/items";

export const storeApi = createApi({
    reducerPath: 'store/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: build => ({
        fakeProducts: build.query<CartFromServer[], string>({
            query: (search: string) => ({
                url: 'products',
                params: {
                   q: search
                }
            })
        })
    })
})

export const {useFakeProductsQuery} = storeApi