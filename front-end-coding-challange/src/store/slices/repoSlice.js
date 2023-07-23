
import {createSlice} from "@reduxjs/toolkit";

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