import React, { useState, useEffect } from 'react'
import Jokes from "./Jokes"

const JokeContainer = () => {
  const [joke, setJoke] = useState("")

  useEffect(() => {
    getDadJokes();
  }, []);

  const getDadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {headers: { Accept: "application/json" }});
    const json = await response.json();
    setJoke(json)
    console.log(json);
  };

  return (
    <div>
      <h1>Joke Container</h1>
      <Jokes />
    </div>
  )
}

export default JokeContainer
