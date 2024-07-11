import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode: {
        html: string,
        css: string,
        javascript: string,

    },
    currentLanguage: "html" | "css" | "javascript",
}

const initialState: CompilerSliceStateType = {
    fullCode: {
        html: "this is html code",
        css: "this is css code",    
        javascript: "this is javascript code",
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload
        },
    },
});

export default compilerSlice.reducer
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions