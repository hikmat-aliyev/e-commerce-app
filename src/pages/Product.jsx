import Navbar from "../components/Navbar";
import Footer from './Footer'
import '../index.css'
import { useParams } from "react-router-dom";
import { products } from "../components/Products";
import './Product.css'
import { useState } from "react";
import { useEffect } from "react";

function Product() {
    const[product, setProduct] = useState(false)
    const {productId} = useParams(); 
    const productInfo = products.filter(item => item.id == productId);
    useEffect(() => {
        setProduct(productInfo)
    }, [])

    return(
        <div>
            { product &&
                <div>
                    <Navbar />
                    <div className="main-container">

                        <div className="single-product-container">
                            <img className='single-product-image' src={product[0].imgFace} alt="product-image"/>
                            <div className="other-images-container">
                                <img src={product[0].imgFace} alt="product-image"/>
                                <img src={product[0].imgBack} alt="product-image"/>
                            </div>
                        </div>

                        <div className="description-info">
                            <div>
                                <h1>{product[0].title}</h1>
                                <h3>{product[0].price}</h3>
                                <p>{product[0].description}</p>
                            </div>
                            <div>
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                            </div>
                            <button className="add-button">Add</button>
                        </div>

                    </div>
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Product;