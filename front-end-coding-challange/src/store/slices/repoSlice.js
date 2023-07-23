
import {createSlice} from "@reduxjs/toolkit";

const repoSlice = createSlice({
    name: "repo",
    initialState:[],
    reducers:{
        addRepo(state,action){
            state.push(action.payload);
        },
    }
}) ;

export default repoSlice.reducer ; 
export const {addRepo} = repoSlice.actions;