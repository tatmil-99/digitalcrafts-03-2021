import './App.css';
import React, { useState } from "react"
import AboutMe from "./components/AboutMe"
import Home from "./components/Home"
import Blog from "./components/Blog"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //potential function to test if a user is logged in
  const login = () => {

  }

  return (
    <div className="App">
      <Router >
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
