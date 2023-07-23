import React, { useEffect } from "react"
import './App.css';
import Repository from "./Repository";
import {useDispatch} from "react-redux";
import { addRepo } from "./store/slices/repoSlice";

function App() {
    const dispatch = useDispatch();
    async function callApi(){
      try{
        const response = await fetch("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc");
        const data = await response.json();
       
        dispatch(addRepo(data.items))
      }
      catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
        callApi();
    },[])
  return (
    <div className="container">
      <h1 className="main-heading">Most Starred Repos</h1>
      <Repository/>
      
      
  </div>
  );
}

export default App;
