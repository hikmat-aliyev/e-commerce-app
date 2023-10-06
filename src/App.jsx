import { useState, useEffect, createContext, useRef } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import './App.css'
import Footer from './pages/Footer';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Product from './pages/Product';

export const CartContext = createContext(
    {
        cartItems: [],
        cartItemCount: 0,
        addToCart: () => {},
        size: 'null'
    }
);

// eslint-disable-next-line react/prop-types
function App() {
    const[cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const pageContainerRef = useRef(null);

    const addToCart = (name, price, image, size) => {
      const item = {
        name: name,
        price: price,
        image: image,
        size: size,
        quantity: 1,
      }

      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.name === item.name && cartItem.size === item.size) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      const isItemInCart = updatedCart.some((cartItem) => cartItem.name === item.name && cartItem.size === item.size);

      if (!isItemInCart) {
        updatedCart.push(item);
      }
      
      setCartItems(updatedCart);
      const count = cartItemCount + 1;
      setCartItemCount(count);
    }

    useEffect(() => {
      // Scroll to the top of the page container when the route changes
      if (pageContainerRef.current) {
        pageContainerRef.current.scrollTo(0, 0);
      }
    }, []);
    
    return(
      <div className='all-pages-container' ref={pageContainerRef}>
          <CartContext.Provider value={{cartItems, addToCart, cartItemCount, setCartItemCount}}>
            <Navbar setCartItems={setCartItems}/>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/product/:productId" element={<Product />} />
             </Routes>
        </CartContext.Provider>
      </div>

    )
}

export default App;