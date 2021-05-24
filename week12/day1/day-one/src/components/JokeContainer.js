import React, { useState, useEffect } from 'react'
import Jokes from "./Jokes"

const JokeContainer = () => {
  const [joke, setJoke] = useState("")

  useEffect(() => {
    getDadJokes();
  }, []);

  const getDadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {headers: { Accept: "application/json" }});
    const data = await response.json();
    setJoke(data.joke)
    console.log(data);
  };

  return (
    <div>
      <h1>Joke Container</h1>
      <Jokes joke={joke} setJoke={setJoke} />
      <button onClick={() => {getDadJokes()}}>New Joke</button>
    </div>
  )
}

export default JokeContainer
