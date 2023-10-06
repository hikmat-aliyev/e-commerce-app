import { useState } from "react";
import { products } from "../components/Products";
import './Categories.css'
import '../index.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";
import Footer from "./Footer";


function Categories() {
    const [all, setAll] = useState(true);
    const [shirts, setShirts] = useState(false);
    const [sweatshirts, setSweatshirts] = useState(false);
    const [jackets, setJackets] = useState(false);

   const shirtProducts = products.filter(item => item.category === 'shirts');
   const sweatshirtProducts = products.filter(item => item.category === 'sweatshirts')
   const jacketProducts = products.filter(item => item.category === 'jackets')

   const { cartItems, addToCart } = useContext(CartContext);
   

   function handleAll() {
    setAll(true); setJackets(false); setShirts(false); setSweatshirts(false);
   }

   function handleShirts() {
    setAll(false); setJackets(false); setShirts(true); setSweatshirts(false);
    console.log(products)
   }

   function handleSweatShirts() {
    setAll(false); setJackets(false); setShirts(false); setSweatshirts(true);
   }

   function handleJackets() {
    setAll(false); setJackets(true); setShirts(false); setSweatshirts(false);
   }

    function handleProduct(key) {
        const product = products.filter(item => item.id === key);
        console.log(key)
        return product;
   }

    return(
        <div className="category-page">

            <div className="category-buttons">
                <button onClick={handleAll}>All</button>
                <button onClick={handleShirts}>Shirts</button>
                <button onClick={handleJackets}>Jackets</button>
                <button onClick={handleSweatShirts}>Sweatshirts</button>
            </div>

            <div className="category-container">
                {all && products.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id} className="category product-container" onClick={() => handleProduct(item.id)}>
                        <img className='product-image category-products' src={item.imgFace} alt="product-image"/>
                        <img className='product-image hovered category-products' src={item.imgBack} alt="product-image"/>
                        <div className="description-container">
                            <h5>{item.title}</h5>
                            <h6>{item.price}</h6>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="category-container">
                {shirts && shirtProducts.map(item => (
                    
                    <Link to={`/product/${item.id}`} key={item.id} className="category product-container">
                        <img className='product-image category-products' src={item.imgFace} alt="product-image"/>
                        <img className='product-image hovered category-products' src={item.imgBack} alt="product-image"/>
                        <div className="description-container">
                            <h5>{item.title}</h5>
                            <h6>{item.price}</h6>
                        </div>
                  </Link>
                ))}
            </div>

            <div className="category-container">
                {jackets && jacketProducts.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id} className="category product-container">
                        <img className='product-image category-products' src={item.imgFace} alt="product-image"/>
                        <img className='product-image hovered category-products' src={item.imgBack} alt="product-image"/>
                        <div className="description-container">
                            <h5>{item.title}</h5>
                            <h6>{item.price}</h6>
                        </div>
                  </Link>
                ))}
            </div>

            <div className="category-container">
                {sweatshirts && sweatshirtProducts.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id} className="category product-container">
                        <img className='product-image category-products' src={item.imgFace} alt="product-image"/>
                        <img className='product-image hovered category-products' src={item.imgBack} alt="product-image"/>
                        <div className="description-container">
                            <h5>{item.title}</h5>
                            <h6>{item.price}</h6>
                        </div>
                  </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Categories;