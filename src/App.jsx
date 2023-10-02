import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import './App.css'
import Banner from './pages/Banner';
import PopularProducts from './pages/PopularProducts';
import TrendingNow from './pages/TrendingNow';
import Banner2 from './pages/Banner2';
import Footer from './pages/Footer';


function App() {
    
    return(
        <div className='all-pages-container'>
            <Home />
            <PopularProducts />
            <Banner />
            <TrendingNow />
            <Banner2 />
            <Footer />
        </div>
    )
}

export default App;