import { Link } from "react-router-dom"
import './Navbar.css';
import Cart from '../assets/shopping-cart.svg'
import HamburgerMenu from '../assets/hamburger-menu.svg'
import { useState } from "react";
import { useEffect } from "react";


function Navbar() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 820){
            setMobile(true);
        }
    }, []);

    return(
        <div className="navbar-container">

            <div className="links-container left">
                <Link to='/' id="logo" className="navbar-links">Gasper</Link>
                {!mobile && <div>
                    <Link className="navbar-links">About</Link>
                    <Link className="navbar-links"  >Contact</Link>
                </div> }
            </div>

            <div className="links-container right">
               {!mobile && <Link className="navbar-links" to='/categories'>Categories</Link>}
                <Link className="navbar-links" to='/categories'><img id="cart-svg" src={Cart} alt="shopping-cart" /></Link>
                {mobile && <Link><img id="hamburger-menu" src={HamburgerMenu} alt="hamburger-menu" /></Link> }
            </div>

        </div>
    )
}

export default Navbar;