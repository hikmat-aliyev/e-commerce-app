/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './Navbar.css';
import Cart from '../assets/shopping-cart.svg'
import HamburgerMenuImg from '../assets/hamburger-menu.svg'
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../App";
import HamburgerMenu from "./HamburgerMenu";

function Navbar({setCartItems}) {
    const [mobile, setMobile] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const { cartItemCount } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);
    const { setCartItemCount } = useContext(CartContext);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 820){
            setMobile(true);
        }
    }, []);


    function openBasket() {
        setOverlay(true);
        const basket = document.querySelector('.basket-page');
        basket.classList.add('clicked');
    }

    function closeBasket() {
        setOverlay(false);
        const basket = document.querySelector('.basket-page');
        basket.classList.remove('clicked');
    }

    function increaseQuantity(item) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.name === item.name && cartItem.size === item.size) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      
        // Update the state with the new cart items
        setCartItems(updatedCartItems);
      }

      function decreaseQuantity(item) {
        const updatedCartItems = cartItems.map((cartItem) => {
          if (cartItem.name === item.name && cartItem.size === item.size && cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        });
      
        // Update the state with the new cart items
        setCartItems(updatedCartItems);
      }

      function removeItem(itemToRemove) {
        const updatedCartItems = cartItems.filter((cartItem) => {
          // Return true for all items that should NOT be removed
          return (cartItem.name !== itemToRemove.name || cartItem.size !== itemToRemove.size);
        });
      
        // Update the state with the new cart items
        setCartItems(updatedCartItems);
        setCartItemCount(cartItemCount - 1)
      }
      
      function openMenu() {
        setMenu(true);
      }

    return(
        <div className="navbar-container">

            <div className="links-container left">
                <Link to='/' id="logo" className="navbar-links">Gasper</Link>
                {!mobile && <div>
                    <Link className="navbar-links">About</Link>
                    <Link className="navbar-links">Contact</Link>
                </div> }
            </div>

            <div className="links-container right">
               {!mobile && <Link className="navbar-links" to='/categories'>Categories</Link>}
                <button onClick={openBasket} className="navbar-links cart-button"><img id="cart-svg" src={Cart} alt="shopping-cart" />{cartItemCount}</button>
                {mobile && <button onClick={openMenu}><img id="hamburger-menu" src={HamburgerMenuImg} alt="hamburger-menu" /></button> }
            </div>

            {menu && <HamburgerMenu setMenu={setMenu}/> }      

            {overlay && <div className="overlay" onClick={closeBasket}></div>}

            <div className="basket-page">

                <div className="basket-header">   
                    <h2>Shopping Bag ({cartItemCount})</h2>
                    <button onClick={closeBasket} className="basket-close-button">X</button>
                </div>

                {cartItems.map(item => (
                    
                    <div className="basket-product-container" key={item.title}>

                        <div className="image-crop">
                            <img className="basket-product-image" src={item.image} alt="" />
                        </div>
                        
                        <div className="basket-product-info">

                            <div className="item-name-container">
                                <h3>{item.name}</h3>
                                <button className="product-remove-button" onClick={() => removeItem(item)}>X</button>
                            </div>

                            <h4>{item.price}</h4>
                            <h4>{item.size}</h4>

                            <div className="change-quantity-container">
                                <button onClick={() => decreaseQuantity(item)}>-</button>
                                <h3>{item.quantity}</h3>
                                <button onClick={() => increaseQuantity(item)}>+</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Navbar;