import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Blue from "./components/Blue"
import Red from "./components/Red"
import Yellow from "./components/Yellow"
import Home from "./components/Home"

function App() {

  return (
    <>
      <div id="container">
        <h2>Hello, React Router!</h2>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
            <Route path="/yellow" element={<Yellow/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
        <footer>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/">Home</Link>
        </div>
        </footer>
      </div>
    </>
  )
}

export default App