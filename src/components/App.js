import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import RecipeContainer from "./RecipeContainer";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<RecipeContainer/>} />
    </Routes>
    </>
  )
  
}

export default App;
