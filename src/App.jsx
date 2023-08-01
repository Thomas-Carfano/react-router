import { Routes, Route, Link } from "react-router-dom";
import './index.css'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'



const App = () =>{


  return (
    <>
    <div id="container">
      <div id="navbar">{
        <>
        <Link to={'/Blue'}>Blue</Link>
        <Link to={'/red'}>Red</Link>
        <Link to={'/'}>Home</Link>
        </>}
        </div>
      <div id="main-section">
        <Routes>
          <Route path={'/blue'} element={<Blue />}/>
          <Route path={'/red'} element={<Red />}/>
          <Route path={'/'} element={<Home />}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
