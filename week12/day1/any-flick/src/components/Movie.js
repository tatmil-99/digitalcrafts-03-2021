import React from 'react'


const Movie = (props) => {
  return (
    <div className="img-container">
      {props.movies.map((movie, index) => (
        <img src={movie.Poster} alt="movie"></img>
      ))}
    </div>
  )
}

export default Movie
