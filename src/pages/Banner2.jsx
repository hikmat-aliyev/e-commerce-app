import './Banner2.css'
import { Link } from 'react-router-dom';
function Banner2() {
    return(
        <div className='banner2-container'>
            <div>
                <h1>The base collection <br />  - Ideal every day.</h1>
                <button><Link style={{textDecoration: 'none', color: 'black'}} to='categories'>Shop Now</Link></button>
            </div>
        </div>
    )
}

export default Banner2;