import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>{props.counter}</p>
      <button onClick={() => props.setCounter(props.counter + 1)}>Add</button>
      <button onClick={() => props.setCounter(props.counter - 1)}>Subtract</button>
    </div>
  )
}

export default Counter
