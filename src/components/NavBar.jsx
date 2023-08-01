import { Link } from "react-router-dom";
import '../index.css'
import MainComp from "./MainComp";



const NavBar = () => {
    return (
        <>
<div id="container">
    <div id="navbar">
        {<>
        <Link to={'/Blue'}>Blue</Link>
        <Link to={'/red'}>Red</Link>
        <Link to={'/'}>Home</Link>
        </>}
    </div>
    <MainComp />
</div>
            </>
    )
}

export default NavBar




