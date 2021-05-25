import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Home from "./components/Home"
import SocialMedia from "./components/SocialMedia"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/socialmedia">Social Media</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/socialmedia">
          <SocialMedia />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
