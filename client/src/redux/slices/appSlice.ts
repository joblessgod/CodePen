import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface appSliceState {
    currentUser: {
        username?: string,
        picture?: string,
        email?: string,
        savedCode?: Array<string>
    };
    isLoggedIn: boolean
}

const initialState: appSliceState = {
    currentUser: {},
    isLoggedIn: false
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        updateCurrentUser: (state, action: PayloadAction<appSliceState["currentUser"]>) => {
            state.currentUser = action.payload;
        },
        updateLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }

    },
})
export const { updateCurrentUser, updateLoggedIn } = appSlice.actions

export default appSlice.reducer