import React from "react";
import RecipeList from "./RecipeList";
// import {useState, useEffect} from "react"


function RecipeContainer({recipes, setRecipes, removeRecipe}) {
    // const [recipes, setRecipes] = useState([])
    
    
    
    function handleDelete(id){
        fetch(`http://localhost:8001/recipes/${id}`, {
          method: "DELETE"
      })
      
      .then(()=>removeRecipe(id))
      }

    return (
        <div>
            <RecipeList recipes={recipes} setRecipes={setRecipes} handleDelete={handleDelete}/>
        </div>
    )

}

export default RecipeContainer;