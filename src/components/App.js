import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RecipeContainer from "./RecipeContainer";
import Search from "./Search";
import AddRecipeForm from "./AddRecipeForm";
import Welcome from "./Welcome";

const API = "http://localhost:8001/recipes"

function App() {

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState('')

useEffect(()=>{
  fetch(API)
  .then(response => response.json())
  .then(data => setRecipes(data))
  
},[])

  function postedRecipes(addedRecipes){
    setRecipes([...recipes, addedRecipes])
  }

  function removeRecipe(id){
    const newRecipes = recipes.filter((recipe) => recipe.id !==id)
    setRecipes(newRecipes)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredRecipes = recipes.filter((recipe) =>
  recipe.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/Welcome">Welcome</Link></li>
        <li><Link to="/Recipes">Recipes</Link></li>
        <li><Link to="/Search">Search</Link></li>
        <li><Link to="/Change">Add and Edit</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Welcome" element={<Welcome/>}/>
      <Route path="/Recipes" element={<RecipeContainer recipes={filteredRecipes} removeRecipe={removeRecipe}/>}/>
      <Route path="/Search" element={<Search handleSearch={handleSearch} search={search}/>}/>
      <Route path="/Change" element={<AddRecipeForm postedRecipes={postedRecipes}/>}/>
    </Routes>
    </>
  )
  
}

export default App;
