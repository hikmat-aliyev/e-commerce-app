import Navbar from "../components/Navbar";
import Footer from './Footer'
import '../index.css'
import { useParams } from "react-router-dom";
import { products } from "../components/Products";
import './Product.css'
import { useState, useEffect, useContext } from "react";
// import { CartContext } from "../App";

// eslint-disable-next-line react/prop-types
function Product() {
    const[product, setProduct] = useState(false)
    const [img, setImg] = useState(null)
    const {productId} = useParams(); 

    // const { cartItems } = useContext(CartContext);
    // const { addToCart } = useContext(CartContext);

    const productInfo = products.filter(item => item.id == productId);
    
    useEffect(() => {
        setProduct(productInfo);
        setImg(productInfo[0].imgFace)
    }, [])


    function handleChange(image) {
        setImg(image);
    }

    function addToCart() {
        const addedItem = {
            addedProduct: product,
            addedSize: size
        }
        cartItems.push(addedItem)
        setArray(newArray);
    }

    function handleSize(size) {
        setSize(size)
    }

    return(
        <div>
            { product &&
                <div>
                    <div className="main-container">

                        <div className="single-product-container">
                            <img className='single-product-image' src={img} alt="product-image"/>
                            <div className="other-images-container">
                                <img src={product[0].imgFace} onMouseLeave={() => handleChange(product[0].imgFace   )}
                                 alt="product-image" onMouseEnter={() => handleChange(product[0].imgFace)}/>
                                <img src={product[0].imgBack} onMouseLeave={() => handleChange(product[0].imgFace)}
                                 alt="product-image" onMouseEnter={() => handleChange(product[0].imgBack)}/>
                            </div>
                        </div>

                        <div className="description-info">
                            <div>
                                <h1>{product[0].title}</h1>
                                <h3>{product[0].price}</h3>
                                <p>{product[0].description}</p>
                            </div>
                            <div className="size-container">
                                <button onClick={() => handleSize('S')} className="size-buttons">S</button>
                                <button onClick={() => handleSize('M')} className="size-buttons">M</button>
                                <button onClick={() => handleSize('L')} className="size-buttons">L</button>
                                <button onClick={() => handleSize('XL')} className="size-buttons">XL</button>
                            </div>
                            <button className="add-button" >Add To Cart</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Product;