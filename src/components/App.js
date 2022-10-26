import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RecipeContainer from "./RecipeContainer";
import Search from "./Search";
import AddRecipeForm from "./AddRecipeForm";


function App() {

const [recipes, setRecipes] = useState([])

  function postedRecipes(addedRecipes){
    setRecipes([...recipes, addedRecipes])
  }

  function removeRecipe(id){
    const newRecipes = recipes.filter((recipe) => recipe.id !==id)
    setRecipes(newRecipes)
  }

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
      <Route path="/Home" element={<RecipeContainer removeRecipe={removeRecipe}/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Change" element={<AddRecipeForm postedRecipes={postedRecipes}/>}/>
    </Routes>
    </>
  )
  
}

export default App;
