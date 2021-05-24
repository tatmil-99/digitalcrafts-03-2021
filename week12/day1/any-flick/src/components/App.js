import React, { useState, useEffect } from "react"
import '../App.css';
import Header from './Header';
import Movie from './Movie'
import Search from './Search'


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getMovie = async (searchValue) => {
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=71a5fe49`

    const response = await fetch(URL)
    const data = await response.json()

    if(data.Search) {
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    getMovie(searchValue)
  }, [searchValue])

  return (
    <div className="App">
      <div className="movie-app">
        <Header text="AnyFlick" />
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <Movie movies={movies} />
      </div>
    </div>
  );
}

export default App;
