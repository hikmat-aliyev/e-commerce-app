import { Link } from "react-router-dom"
import './HamburgerMenu.css'
// eslint-disable-next-line react/prop-types
function HamburgerMenu({setMenu}) {


    return(
        <div className="hamburger-menu">
            <button onClick={() => setMenu(false)} className="hamburger-close-btn">X</button>
            <Link to='/' onClick={() => setMenu(false)}>About</Link>
            <Link to='/' onClick={() => setMenu(false)}>Contact</Link>
            <Link to='categories' onClick={() => setMenu(false)}>Categories</Link>
        </div>
    )
}

export default HamburgerMenu;