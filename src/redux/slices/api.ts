import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CompilerSliceStateType } from "./compilerSlice"

// const backendUrl = "https://codepen-backend-ozz5.onrender.com" || "https://code-pen-backend.vercel.app"
const backendUrl = "http://localhost:5000"

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: backendUrl,
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
            }
            ),
        }),
        login: builder.mutation<userInfoType, loginCredentialType>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body: body,
                credentials: "include"
            })
        }),
        signup: builder.mutation<userInfoType, signupCredentialType>({
            query: (body) => ({
                url: "/auth/signup",
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
        }),
    }),
});

export const { useSaveCodeMutation, useLoadCodeMutation, useLoginMutation, useSignupMutation, useLogoutMutation, useGetUserDetailsQuery } = api