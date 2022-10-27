import React, { useState } from "react";

function AddRecipeForm({ postedRecipes }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    ingredients: "",
    time: "",
    url: "",
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit() {
    const addedRecipe = {
      name: formData.name,
      description: formData.description,
      ingredients: formData.ingredients,
      time: formData.time,
      url: formData.url,
    };
    fetch("http://localhost:8001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedRecipe),
    })
      .then((r) => r.json())
      .then((data) => postedRecipes(data));
  }

  return (
    <div className="recipe form">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="form">
          <input
          className="name-input"
            type="text"
            name="name"
            placeholder="Add Recipe Name"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <input
          className="description-input"
            type="text"
            name="description"
            placeholder="Add Recipe Description"
            value={formData.description}
            onChange={handleChange}
          ></input>
          <input
          className="ingredients-input"
            type="text"
            name="ingredients"
            placeholder="Add Recipe Ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          ></input>
          <input
          className="url-input"
            type="text"
            name="url"
            placeholder="Add Image URL"
            value={formData.url}
            onChange={handleChange}
          ></input>
          <input
          className="time-input"
            type="number"
            name="time"
            placeholder="Add Menu Item Price"
            value={formData.time}
            onChange={handleChange}
          ></input>
        </div>
        <button className="add-recipe" type="submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
