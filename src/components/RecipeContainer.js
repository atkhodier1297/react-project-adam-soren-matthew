import React from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import {useState, useEffect} from "react"


const API = "http://localhost:8001/recipes"
function RecipeContainer() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setRecipes(data))
        
    },[])
    console.log(recipes)


    return (
        <div>
            <Search/>
            <AddRecipeForm/>
            <RecipeList recipes={recipes}/>
        </div>
    )

}

export default RecipeContainer;