import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RecipeContainer from "./RecipeContainer";
import AddRecipeForm from "./AddRecipeForm";
import Welcome from "./Welcome";

const API = "http://localhost:8001/recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  function postedRecipes(addedRecipes) {
    setRecipes([...recipes, addedRecipes]);
  }

  function removeRecipe(id) {
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  console.log(search);
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="nav">
        <h1>Restaurant Menu Maker</h1>
        <ul className="links">
          <li>
            <Link to="/Welcome">Welcome Page</Link>
          </li>
          <li>
            <Link to="/Items">Menu Items</Link>
          </li>
          <li>
            <Link to="/Add">Add Menu Items</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Welcome" element={<Welcome />} />
        <Route
          path="/Items"
          element={
            <RecipeContainer
              recipes={filteredRecipes}
              removeRecipe={removeRecipe}
              search={search}
              handleSearch={handleSearch}
            />
          }
        />
        {/* <Route path="/Search" element={<Search handleSearch={handleSearch} search={search}/>}/> */}
        <Route
          path="/Add"
          element={<AddRecipeForm postedRecipes={postedRecipes} />}
        />
      </Routes>
    </>
  );
}

export default App;
