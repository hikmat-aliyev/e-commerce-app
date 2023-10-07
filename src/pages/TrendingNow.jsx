import { products } from '../components/Products';
import './TrendingNow.css'
import './PopularProducts.css'
import { motion } from 'framer-motion';
import {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
function TrendingNow() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const trendingNow = products.filter((item) => item.trend === true);

    useEffect(() => {
        console.log(carousel.current)
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className='trending-container'>
            <h1>Trending Nowadays</h1>
            <motion.div ref={carousel} className='carousel'>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    {trendingNow.map((item) => (
                        <Link to={`/product/${item.id}`} key={item.id}>
                            <motion.div key={item.id} id='trendingId' className="product-container trending">
                                <img className='trend-image' src={item.imgFace} alt="trend-image" />
                                <img className='trend-image hovered' src={item.imgBack} alt="trend-image" />
                                <div className="description-container">
                                    <h5>{item.title}</h5>
                                    <h6>{item.price}</h6>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default TrendingNow;