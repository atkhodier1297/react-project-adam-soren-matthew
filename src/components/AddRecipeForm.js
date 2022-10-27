import React, { useState } from "react";

function AddRecipeForm({ postedRecipes }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    ingredients: "",
    price: "",
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
      price: formData.price,
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
            placeholder="Add Menu Item Name"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <input
          className="description-input"
            type="text"
            name="description"
            placeholder="Add Menu Item Description"
            value={formData.description}
            onChange={handleChange}
          ></input>
          <input
          className="ingredients-input"
            type="text"
            name="ingredients"
            placeholder="Add Menu Item Ingredients"
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
          className="price-input"
            type="number"
            name="price"
            placeholder="Add Menu Item Price"
            value={formData.price}
            onChange={handleChange}
          ></input>
        </div>
        <button className="add-item" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
