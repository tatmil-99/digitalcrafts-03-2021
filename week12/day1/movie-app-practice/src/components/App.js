import React, { useState, useEffect } from "react" 
import '../App.css';
import Movies from "./Movies"
import Search from "./Search"

function App() {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState("")

  const fetchMovies = async (searchItems) => {
    const url = `http://www.omdbapi.com/?s=${searchItems}&apikey=71a5fe49`

    const response = await fetch(url)
    const data = await response.json()

    if(data.Search) {
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    fetchMovies(searchMovies)
  }, [searchMovies])

  return (
    <div className="App">
      <Search text="Movies" setSearchFunction={setSearchMovies} />
      <Movies movieState={movies} />
    </div>
  );
}

export default App;
