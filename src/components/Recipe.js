import React from 'react'

function Recipe({recipe, removeRecipe}) {

    const {id, name, url, description, ingredients, time} = recipe

    function handleDelete(){
      fetch(`http://localhost:8001/recipes/${id}`, {
        method: "DELETE"
    })
    
    .then(()=>removeRecipe(id))
    }

  return (
    <div class="card">
  <div class="container">
    <h3><b>{name}</b></h3>
    <img src={url} alt={name}/>
    <p>{description}</p>
    <p>{ingredients}</p>
    <p>{time} Minutes To Cook</p>
    <button onClick={handleDelete}>Delete</button>
  </div>
</div>
  )
}

export default Recipe