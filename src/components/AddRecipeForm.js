import React from 'react'

function AddRecipeForm() {
  return (
    <div className='ui segment'>
        <form className='ui form'>
            <div className='inline fields'>
                <input type="text" name="name" placeholder='Add Recipe Name'></input>
                <input type="text" name="description" placeholder='Add Recipe Description'></input>
                <input type="text" name="ingredients" placeholder='Add Recipe Ingredients'></input>
                <input type="text" name="url" placeholder='Add Recipe Image'></input>
                <input type="number" name="time" placeholder='Add Cook Time'></input>
            </div>
            <button className='ui button' type='submit'>Add Recipe</button>
            <button className='ui button two' type='submit'>Edit Recipe</button>
        </form>
    </div>
  )
}

export default AddRecipeForm