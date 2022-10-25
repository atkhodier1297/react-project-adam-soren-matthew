import React from 'react'

function Search({search, setSearch}) {
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  return (
    <div className='ui large fluid icon input'>
      <input type="text" placeholder='Search for recipes!' value={search} onChange={handleSearch}></input>
    </div>
  )
}

export default Search