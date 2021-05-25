import React from 'react'

const Movies = (props) => {
  return (
    <div>
      {props.movieState.map(
        (movie) => (
          <img src={movie.Poster} alt="movie"></img>
          )
        )
      }
    </div>
  )
}

export default Movies
