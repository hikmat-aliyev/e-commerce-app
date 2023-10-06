import './Banner.css'
import '../index.css'
import { Link } from 'react-router-dom';

function Banner() {

    return (
        <div className='banner-container'>
            <h1>Be different in your own way!</h1>
            <h3>Find your unique style.</h3>
            <button><Link style={{textDecoration: 'none', color: 'black'}} to='categories'>Shop Collection</Link></button>
        </div>
    )
}

export default Banner;


