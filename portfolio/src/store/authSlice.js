import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       status: false,
       userData: null,
       userDetails: null
}
const authSlice = createSlice({
       name: "auth",
       initialState,
       reducers: {
              setStatus: (state, action) => {
                     state.status = false
              },
              login: (state, action) => {
                     state.status = true,
                            state.userData = action.payload
              },
              logout: (state) => {
                     state.status = false,
                            state.userData = null
                     state.userDetails = []

              },
              userDetails: (state, action) => {
                     state.userDetails = action.payload

              },
       }

})
export const { login, logout, userDetails ,setStatus} = authSlice.actions
export default authSlice.reducer