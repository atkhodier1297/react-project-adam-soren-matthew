import React from 'react'
import RecipeContainer from './RecipeContainer'

function Search({search, setSearch}) {
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  return (
    <div className='search'>
      <input type="text" placeholder='Search for recipes!' value={search} onChange={handleSearch}></input>
    <RecipeContainer/>
    </div>
  )
}

export default Search