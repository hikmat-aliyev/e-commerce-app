import '../index.css'
import { useParams } from "react-router-dom";
import { products } from "../components/Products";
import './Product.css'
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../App";


// eslint-disable-next-line react/prop-types
function Product() {
    const[product, setProduct] = useState(false);
    const [size, setSize] = useState(null);
    const [img, setImg] = useState(null);
    const {productId} = useParams(); 
    const { addToCart } = useContext(CartContext);

    const productInfo = products.filter(item => item.id == productId);
    
    useEffect(() => {
        setProduct(productInfo);
        setImg(productInfo[0].imgFace)
    }, [])


    function handleChange(image) {
        setImg(image);
    }


    function handlePayment() {
        addToCart(product[0].title, product[0].price, product[0].imgFace, size);
    }

    function handleSize(sizeInfo) {
        setSize(sizeInfo)
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
                                <button onClick={() => handleSize('S')} className={`size-buttons ${size === 'S' ? 'selected' : ''}`}>S</button>
                                <button onClick={() => handleSize('M')} className={`size-buttons ${size === 'M' ? 'selected' : ''}`}>M</button>
                                <button onClick={() => handleSize('L')} className={`size-buttons ${size === 'L' ? 'selected' : ''}`}>L</button>
                                <button onClick={() => handleSize('XL')} className={`size-buttons ${size === 'XL' ? 'selected' : ''}`}>XL</button>
                            </div>
                            <button className={`add-button ${size ? 'selected' : ''}`} onClick={handlePayment}>Add To Cart</button>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Product;