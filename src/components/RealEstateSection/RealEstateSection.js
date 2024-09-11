import React from 'react';
import './RealEstateSection.css';
import house2 from '../assets/images/house2.jpg';
import house3 from '../assets/images/house3.jpg';
import house4 from '../assets/images/house4.jpg';

const RealEstateSection = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are-content">
        <div className="text-section">
          <h4>Who Are We</h4>
          <h2>
            Assisting Individuals In <br /> Locating The Appropriate Real Estate.
          </h2>
          <p>
            Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec
            Dignissim Purus. Nulla Convallis Ipsum Molestie Nibh Malesuada, Ac
            Malesuada Leo Volutpat.
          </p>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="icon">🏠</div>
              <h3>Donec porttitor euismod</h3>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
            <div className="feature-card">
              <div className="icon">👤</div>
              <h3>Donec porttitor euismod</h3>
              <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={house2} alt="House 1" className="image" id='image1' />
          <img src={house3} alt="House 2" className="image" id="image2" />
          <img src={house4} alt="House 3" className="image" id="image3" />
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
