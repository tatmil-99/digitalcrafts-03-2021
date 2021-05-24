import React from 'react'

const Search = (props) => {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Type to search..."
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
      ></input>
    </div>
  )
}

export default Search
