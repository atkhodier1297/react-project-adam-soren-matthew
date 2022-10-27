import React from "react";
import RecipeList from "./RecipeList";
import Search from "./Search";

function RecipeContainer({
  recipes,
  setRecipes,
  removeRecipe,
  search,
  handleSearch,
}) {
  function handleDelete(id) {
    fetch(`http://localhost:8001/recipes/${id}`, {
      method: "DELETE",
    }).then(() => removeRecipe(id));
  }

  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <RecipeList
        recipes={recipes}
        setRecipes={setRecipes}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default RecipeContainer;
