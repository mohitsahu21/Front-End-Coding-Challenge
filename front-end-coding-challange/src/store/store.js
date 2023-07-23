
import { configureStore } from "@reduxjs/toolkit";
import  repoSlice  from "./slices/repoSlice";

const store = configureStore({
    reducer:{
        repos : repoSlice,
    }
})

export default store;
