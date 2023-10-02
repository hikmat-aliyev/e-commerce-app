// import { products } from '../components/Products';
// import './TrendingNow.css'
// import { motion } from 'framer-motion';
// import {useState, useEffect, useRef} from 'react'


// function TrendingNow() {

//     const trendingNow = products.filter((item) => item.trend === true)

//     return(
//         <div className='carousel-container'>
//             <motion.div  className="product-container trending">
//                 <motion.div className="inner-carousel">
//                 {trendingNow.map((item) => {
//                     return(
//                         <motion.div key={item.id}>
//                             <img className='product-image' src={item.imgFace} alt="product-image" />
//                             <img className='product-image hovered' src={item.imgBack} alt="product-image" />
//                             <div className="description-container">
//                                 <h5>{item.title}</h5>
//                                 <h6>{item.price}</h6>
//                             </div>
//                         </motion.div>           
//                     )})
//                 }
//                 </motion.div>
//             </motion.div>
//         </div>
//     )
// }

// export default TrendingNow;
import { products } from '../components/Products';
import './TrendingNow.css'
import './PopularProducts.css'
import { motion } from 'framer-motion';
import {useState, useEffect, useRef} from 'react'
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
            <h1>Trending Nodasdaw</h1>
            <motion.div ref={carousel} className='carousel'>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    {trendingNow.map((item) => (
                        <motion.div key={item.id} id='trendingId' className="product-container trending">
                            <img className='trend-image' src={item.imgFace} alt="trend-image" />
                            <img className='trend-image hovered' src={item.imgBack} alt="trend-image" />
                            <div className="description-container">
                                <h5>{item.title}</h5>
                                <h6>{item.price}</h6>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default TrendingNow;