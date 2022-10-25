import React from 'react'
import Recipe from './Recipe'

function RecipeList({recipes}) {

  const eachRecipe = recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}/>
  )

  return (
    <div>{eachRecipe}</div>
  )
}

export default RecipeList