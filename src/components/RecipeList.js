import React from 'react'

function RecipeList({recipes}) {
  const {name, description, ingredients, url, time} = recipes
  const eachRecipe = recipes.map(recipe => <RecipeList recipe={recipe} key={recipe.id}/>
  )

  return (
    <li className="recipe card">
    <div className="image">
      <span className="name"></span>
      <img src={url} alt={name}/>
      <div className="description" >{description}</div>
      <div className="ingredients">{ingredients}</div>
      <div className="time">{time}</div>
    </div>

    </li>
  )
}

export default RecipeList