import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import './Home.css'

function Home() {

    return(
        <div className=".home-container">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Home;