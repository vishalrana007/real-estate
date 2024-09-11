import React from 'react';
import './Hero.css';
import house from '../assets/images/house.jpg';
import clients from '../assets/images/client3.png';
import clients1 from '../assets/images/client1.png';
import clients2 from '../assets/images/client2.png';
import clients4 from '../assets/images/client4.png';
import clients5 from '../assets/images/client5.png';
const HeroSection = () => {
    return (
        <main>
            <div className="hero">
                <div className="hero-text">
                    <h1>Find Your Dream Home With Ease – Where Luxury Meets Comfort. Discover Your Perfect Space Today!</h1>
                    <p>Diverse Properties For Every Budget, Stress-Free Home Search..</p>
                </div>
                <center>
                    <div className="hero-image">
                        <img src={house} alt="House" />
                        <div className="hero-image-controls">
                            <button className="previous">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button className="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div></center>
            </div>
            <div className="features">
                <div className="feature">
                    <div className="feature-image" id='featureimg'>
                        <img src={clients} alt="Clients" />
                        <img src={clients1} alt="Clients" />
                        <img src={clients2} alt="Clients" />
                      
                        <img src={clients4} alt="Clients" />
                        <img src={clients5} alt="Clients" />
                    </div>
                    <div className="feature-text">
                        <h2>400 Happy Clients</h2>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-image">
                        <img src={house} alt="Listings" className='house' id='homepic' />
                    </div>
                    <div className="feature-text">
                        <h2>60+ New Listings Everyday!</h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
