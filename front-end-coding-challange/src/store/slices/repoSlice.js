
import {createSlice} from "@reduxjs/toolkit";

// this is slice for redux store and we store the repository data in this initial state.
const repoSlice = createSlice({
    name: "repo",
    initialState:[],
    reducers:{
        addRepo(state,action){
            state.splice(0,30,action.payload);
           
        },
    }
}) ;


export default repoSlice.reducer ; 
export const {addRepo} = repoSlice.actions;