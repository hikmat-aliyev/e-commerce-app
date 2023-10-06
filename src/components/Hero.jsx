import './Hero.css'
import '../index.css'
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <div className='hero-container'>
            <div>
                <h1>Slick. Modern.<br />Awesome.</h1>
                <button><Link style={{textDecoration: 'none', color: 'black'}} to='categories'>Shop Collection</Link></button>
            </div>
        </div>
    )
}

export default Hero;