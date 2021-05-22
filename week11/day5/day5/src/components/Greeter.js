import React, { useState } from 'react'
import Counter from "./Counter"

export default function Greeter() {
  const [greet, setGreet] = useState("")

  // const handleChange = (e) => {
  //   setGreet(e.target.value)
  // }

  return (
    <div>
      <h1>Welcome, {greet}</h1>
      <input type="text" onChange={(e) => (setGreet(e.target.value))}></input>
      <Counter greet={greet} />
    </div>
  )
}
