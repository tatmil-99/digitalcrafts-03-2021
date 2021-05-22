import React, { useState } from 'react'

export default function Counter(props) {
  const [count, setCount] = useState(40)

  return (
    <div>
      <h1>{props.greet} Needs {count} of grandmas cookies</h1>
      <button onClick={() => setCount(count - 1)}>Less</button>
      <button onClick={() => setCount(count + 1)}>More</button>
    </div>
  )
}
