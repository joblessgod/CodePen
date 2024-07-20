import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CompilerSliceStateType } from "./compilerSlice"

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
        credentials: "include"
    }),
    endpoints: (builder) => ({
        saveCode: builder.mutation<{ url: string, status: string }, CompilerSliceStateType["fullCode"]>({
            query: (fullCode) => ({
                url: "/compiler/save",
                method: "POST",
                body: fullCode,
            }),
        }),
        loadCode: builder.mutation<{ fullCode: CompilerSliceStateType["fullCode"] }, { urlId: string }>({
            query: (body) => ({
                url: "/compiler/load",
                method: "POST",
                body: body,
            }),
        }),
        login: builder.mutation<userInfoType, { userId: string, password: string }>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body: body,
                credentials: "include"
            })
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            })
        }),
        getUserDetails: builder.query<userInfoType, void>({
            query: () => ({
                url: "/auth/user-details",
                cache: "no-store"
            })
        })
    }),
});

export const { useSaveCodeMutation, useLoadCodeMutation, useLoginMutation, useLogoutMutation, useGetUserDetailsQuery } = api