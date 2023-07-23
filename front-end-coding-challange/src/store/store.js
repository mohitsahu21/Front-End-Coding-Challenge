
import { configureStore } from "@reduxjs/toolkit";
import  repoSlice  from "./slices/repoSlice";

// store for ropository data.
const store = configureStore({
    reducer:{
        repos : repoSlice,
    }
})

export default store;
