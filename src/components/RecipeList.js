import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleDelete }) {
  const eachRecipe = recipes.map((recipe) => (
    <Recipe recipe={recipe} key={recipe.id} handleDelete={handleDelete} />
  ));

  return <div>{eachRecipe}</div>;
}

export default RecipeList;
