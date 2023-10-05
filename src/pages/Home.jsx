import Hero from "../components/Hero";
import './Home.css'
import PopularProducts from "./PopularProducts";
import Banner from "./Banner";
import TrendingNow from "./TrendingNow";
import Banner2 from "./Banner2";

function Home() {

    return(
        <div className="home-container">
            <Hero />
            <PopularProducts />
            <Banner />
            <TrendingNow />
            <Banner2 />
        </div>
    )
}

export default Home;