import Navbar from "../components/Navbar";
import Footer from './Footer'
import '../index.css'
import { useParams } from "react-router-dom";
import { products } from "../components/Products";
import './Product.css'
import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Product({array}) {
    const[product, setProduct] = useState(false)
    const [img, setImg] = useState(null)
    const {productId} = useParams(); 
    const [addedItems, setAddedItems] = useState(array);

    const productInfo = products.filter(item => item.id == productId);
    
    useEffect(() => {
        setProduct(productInfo);
        setImg(productInfo[0].imgFace)
    }, [])


    function handleChange(image) {
        setImg(image)
    }

    function handlePayment() {
        const array = [...addedItems]
        array.push('product')
        console.log(array)
    }

    return(
        <div>
            { product &&
                <div>
                    <Navbar />
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
                                <button className="size-buttons">S</button>
                                <button className="size-buttons">M</button>
                                <button className="size-buttons">L</button>
                                <button className="size-buttons">XL</button>
                            </div>
                            <button className="add-button" onClick={handlePayment}>Add To Cart</button>
                        </div>

                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Product;