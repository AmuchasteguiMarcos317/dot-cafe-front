import { createSlice } from "@reduxjs/toolkit";

export const AlertsSlice = createSlice({
    name: 'alert',
    initialState : {
        message : null,
        success: null
    },

    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message
            state.success = action.payload.success
        }
    }
})

export const {setMessage} = AlertsSlice.actions
export default AlertsSlice.reducer