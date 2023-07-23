import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { addRepo } from "./store/slices/repoSlice";
import './App.css';

function PaginationBar(){
    const dispatch = useDispatch();
      
      const [count,setCount] = useState(1);  // this state to track the page. 
      
      // this function is use for making Http requst and store repository data to the store.
     async function fetchRepo () {
        try{
            const response = await fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page= + ${count}`  );
            const data = await response.json();
           
            dispatch(addRepo(data.items))
          }
          catch (error) {
            console.log(error);
          }
     }


     useEffect(()=>{
       fetchRepo()
     },[count])
    return <>
    
    <nav  aria-label="Page navigation example" >
  <ul className="pagination">
    <li className="page-item"><a href="#"> <button className="page-link" onClick={()=>  (count>1) ? setCount(count-1): setCount(1)}>Previous</button></a></li>
    <li className="page-item"> <a href="#"><button className="page-link" onClick={()=> setCount(1)}>1</button></a></li>
    <li className="page-item"><a href="#"><button className="page-link" onClick={()=> setCount(2)}>2</button></a></li>
    <li className="page-item"><a href="#"><button className="page-link" onClick={()=> setCount(3)}>3</button></a></li>
    <li className="page-item"><a href="#"><button className="page-link" onClick={()=> setCount(count+1)} >Next</button></a></li>
  </ul>
</nav>
    </>
}
export default PaginationBar;