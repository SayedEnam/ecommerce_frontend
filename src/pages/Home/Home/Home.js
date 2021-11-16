import React from 'react';
import './Home.css';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../../Banner/Banner';
import Services from '../Services/Services';
import Reviews from '../../Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <br />
            <Reviews/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;