import React from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";

function RecipeContainer() {

    return (
        <div>
            <Search/>
            <AddRecipeForm/>
            <RecipeList/>
        </div>
    )

}

export default RecipeContainer;