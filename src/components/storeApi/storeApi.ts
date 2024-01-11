import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsFromServ } from "../../utilites";

export const storeApi = createApi({
    reducerPath: 'store/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: build => ({
        searchStore: build.query<ProductsFromServ[], string>({
            query: () => ({
                url: 'products'
            })
        })
    })
})

export const {useSearchStoreQuery} = storeApi