import React from "react";

function Recipe({ recipe, handleDelete }) {
  const { id, name, url, description, ingredients, time } = recipe;

  return (
    <div className="card">
      <div className="container">
        <h3>
          {name}
        </h3>
        <img className="image" src={url} alt={name}/>
        <p>{description}</p>
        <p>{ingredients}</p>
        <p>{time} Minutes To Cook</p>
        <button className="delete" onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Recipe;
