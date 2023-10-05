// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({children}){
//     const[cartItems, setCartItems] = useState([]);

//     const addToCart = (item) => {
//         setCartItems([...cartItems, item])
//     }

//     const cartItemCount = cartItems.length;

//     return(
//         <CartContext.Provider value={{cartItems, addToCart, cartItemCount}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export function useCart() {
//     return useContext(CartContext);
// }