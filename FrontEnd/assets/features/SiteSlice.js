import { createSlice } from "@reduxjs/toolkit/dist";

export const SiteSlice= createSlice({

name:'site', 
initialState:{
    place: [],
    address:[],
    dsc:[]
}
,
reducers:{
    add: (state,action)=>
    {
        state.place.push(action.payload)
    },
    loc:(state,action)=>
    {
         state.address.push(action.payload)
    }
    ,
    more:(state,action)=>
    {
        state.dsc.push(action.payload)
    }
}

})

export const  {add,loc,more} = SiteSlice.actions;
export default SiteSlice.reducer;