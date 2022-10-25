import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import RecipeContainer from "./RecipeContainer";
import Search from "./Search";
import AddRecipeForm from "./AddRecipeForm";



function App() {
  
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Search">Search</Link></li>
        <li><Link to="/Change">Add and Edit</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Home" element={<RecipeContainer/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Change" element={<AddRecipeForm/>}/>
    </Routes>
    </>
  )
  
}

export default App;
