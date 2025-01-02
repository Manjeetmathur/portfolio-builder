import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       postData : null
}
const postSlice = createSlice({
       name : "post",
       initialState,
       reducers : {
              postsData : (state,action) => {
                     state.postData = action.payload
                     console.log();
                     
              },
       }

})
export const {postsData} = postSlice.actions
export default postSlice.reducer