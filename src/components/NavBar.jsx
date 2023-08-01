import { Link } from "react-router-dom";
import '../index.css'

const NavBar = () => {
    return (
        <>
<div id="navbar">
        {<>
        <Link to={'/Blue'}>Blue</Link>
        <Link to={'/red'}>Red</Link>
        <Link to={'/'}>Home</Link>
        </>}
    </div>
            </>
    )
}

export default NavBar




