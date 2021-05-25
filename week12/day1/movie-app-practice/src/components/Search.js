import React from 'react'

const Search = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <div>
        <input
          type="text"
          placeholder="Search for movie..."
          onChange={(e) => props.setSearchFunction(e.target.value)}
        ></input>
      </div>
    </div>
  )
}

export default Search
