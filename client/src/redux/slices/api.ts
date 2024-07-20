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
                body: fullCode
            }),
        }),
        loadCode: builder.mutation<{ fullCode: CompilerSliceStateType["fullCode"] }, { urlId: string }>({
            query: (body) => ({
                url: "/compiler/load",
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation<userInfoType, { userId: string, password: string }>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body,
            })
        })
    }),
});

export const { useSaveCodeMutation, useLoadCodeMutation } = api