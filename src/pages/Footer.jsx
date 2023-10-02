import './Footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <div className="inner-footer">
                <div className='footer-header'>
                    <h1>Subscribe To Get Offers In</h1>
                    <h1>Your Inbox</h1>
                </div>
                <div className='subscribe-container'>
                    <input placeholder="Your email address..." type="text"/>
                    <button>Subscribe</button>
                </div>
                <div className='footer-links'>
                    <a href="">About</a>
                    <a href="">FAQs</a>
                    <a href="">News</a>
                    <a href="">Careers</a>
                    <a href="">Contact Us</a>
                </div>
                <p>Designed by Hikmat Aliyev</p>
            </div>
        </div>
    )
}

export default Footer;