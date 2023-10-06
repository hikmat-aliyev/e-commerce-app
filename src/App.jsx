// import React, { useState, useEffect, createContext } from 'react';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import { Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import './App.css'
// import Banner from './pages/Banner';
// import PopularProducts from './pages/PopularProducts';
// import TrendingNow from './pages/TrendingNow';
// import Banner2 from './pages/Banner2';
// import Footer from './pages/Footer';
// import Navbar from './components/Navbar';
// import Categories from './pages/Categories';
// import Product from './pages/Product';

// export const CartContext = createContext(
//     {
//         cartItems: [],
//         cartItemCount: 0,
//         addToCart: () => {},
//     }
// );

// // const router = createBrowserRouter([
// //     {
// //       path: '/',
// //       element: <App />
// //     },
// //     {
// //       path: '/categories',
// //       element: <Categories />
// //     },
// //     {
// //       path: '/product/:productId',
// //       element: <Product />
// //     }
// //   ])

// // eslint-disable-next-line react/prop-types
// function App() {

//     const[cartItems, setCartItems] = useState([]);

//     const addToCart = (item) => {
//         setCartItems([...cartItems, item])
//     }
    
//     const cartItemCount = cartItems.length;

//     return(
//       <div className='all-pages-container'>
//         <CartContext.Provider value={{cartItems, cartItemCount, addToCart}}>
//             <Navbar />
//             <Routes>

//             </Routes>
//             <Home />
//             <PopularProducts />
//             <Banner />
//             <TrendingNow />
//             <Banner2 />
//             <Footer />
//         </CartContext.Provider>
//       </div>
//     )
// }

import { useState, useEffect, createContext } from 'react';
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
    
    return(
      <div className='all-pages-container'>
          <CartContext.Provider value={{cartItems, addToCart, cartItemCount, setCartItemCount}}>
            <Navbar setCartItems={setCartItems}/>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/product/:productId" element={<Product />} />
             </Routes>
             <Footer />
        </CartContext.Provider>
      </div>

    )
}

export default App;