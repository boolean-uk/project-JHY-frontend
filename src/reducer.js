import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice(
    {
        name : "text",
        initialState: {
            value : "Press the button below to generate a new quote"
        },
        reducers: {
            changeQuote: (state, action) => {
                state.value = action.payload
            }
        }
    }
)

export const { changeQuote } = textSlice.actions

export default textSlice.reducer