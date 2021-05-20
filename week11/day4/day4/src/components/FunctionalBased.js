import React, { useState } from 'react'

export default function FunctionalBased() {
  const [loadingMessage, setLoadingMessage] = useState("loading")

  return (
    <div>
      <h1>Functional Based</h1>
      <p>{loadingMessage}</p>
      <button onClick={() => setLoadingMessage("finished")}>Finished Loading</button>
    </div>
  )
}
