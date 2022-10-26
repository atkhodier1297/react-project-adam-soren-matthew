import React from 'react'

function Recipe({recipe}) {
    const {name, url, description, ingredients, time} = recipe
  return (
    <div class="card">
  <div class="container">
    <h4><b>{name}</b></h4>
    <img src={url} alt={name}/>
    <p>{description}</p>
    <p>{ingredients}</p>
    <p>{time} Minutes To Cook</p>
  </div>
</div>
  )
}

export default Recipe