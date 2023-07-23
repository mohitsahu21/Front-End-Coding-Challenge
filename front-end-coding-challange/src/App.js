import React, { useEffect } from "react"
import './App.css';
import Repository from "./Repository";

import PaginationBar from "./PaginationBar";

function App() {
  return (
    <div className="container">
      <h1 className="main-heading">Most Starred Repos</h1>
      <Repository/>
      <PaginationBar/>
  </div>
  );
}

export default App;
