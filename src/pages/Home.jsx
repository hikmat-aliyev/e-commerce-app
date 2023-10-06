import Hero from "../components/Hero";
import './Home.css'
import PopularProducts from "./PopularProducts";
import Banner from "./Banner";
import TrendingNow from "./TrendingNow";
import Banner2 from "./Banner2";
import Footer from "./Footer";

function Home() {

    return(
        <div className="home-container">
            <Hero />
            <PopularProducts />
            <Banner />
            <TrendingNow />
            <Banner2 />
            <Footer />
        </div>
    )
}

export default Home;