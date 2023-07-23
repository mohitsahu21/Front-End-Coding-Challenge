import React from "react"
import './App.css';
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

 // this component is use for display repository card.

export default function Repository(){

    // we store the repo data in data variable.
    const data = useSelector((state)=>{
         return state.repos;
    });
    console.log(data[0]);
   
    return <> {data[0] ? data[0].map((item)=>{
           
        return (<div className="card mb-3" style={{"maxWidth": "540px"}} key={item.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.owner.avatar_url
} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">{item.description}</p> 
          <div> <span className="btn btn-secondary">⭐ Star {item.stargazers_count}</span> <span className="btn btn-secondary second">Issue {item.has_issues ? item.open_issues : 0}</span></div>  
              
              
            </div>
            <span className="text">Last pushed {item.updated_at} by {item.owner.login}</span>
             
          </div>
        </div>
      </div>)
     }) : <Pagination/> } 
        </>
        
    
}