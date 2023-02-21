import { createSlice } from '@reduxjs/toolkit/dist'

export const UsernameAndPasswordSlice = createSlice({
 name:'nameAndPass',
 initialState:{
    password:[],
    email:[]
 },
 reducers:{

 addPassword:(state,action)=>
 {
    state.password.push(action.payload)
 },
 addEmail:(state,action)=>
 {
   state.email.push(action.payload)
   console.log("paylaod",action.payload)
 }
}})


export const {addName, addPassword,addEmail}= UsernameAndPasswordSlice.actions;
export default UsernameAndPasswordSlice.reducer;