import React from "react";
import RecipeList from "./RecipeList";
import {useState, useEffect} from "react"

const API = "http://localhost:8001/recipes"
function RecipeContainer() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setRecipes(data))
        
    },[])
    //console.log(recipes)

    function removeRecipe(id){
        const newRecipes = recipes.filter((recipe) => recipe.id !==id)
        setRecipes(newRecipes)
      }
    
    return (
        <div>
            <RecipeList recipes={recipes} removeRecipe={removeRecipe}/>
        </div>
    )

}

export default RecipeContainer;