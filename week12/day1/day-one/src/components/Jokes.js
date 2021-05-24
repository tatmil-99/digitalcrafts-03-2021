import React from 'react'

const Jokes = (props) => {
  return (
    <div>
      <h1>Jokes</h1>
      <p>{props.joke}</p>
    </div>
  )
}

export default Jokes
