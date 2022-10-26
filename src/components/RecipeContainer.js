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

    return (
        <div>
            <RecipeList recipes={recipes} setRecipes={setRecipes}/>
        </div>
    )

}

export default RecipeContainer;