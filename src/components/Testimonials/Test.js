import React from 'react';
import './Test.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h2>Testimonials</h2>
        <h3>Looks What Our Customers Say!</h3>
        <p>
          Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec Dignissim Purus.
          Nulla Convallis Ipsum Molestie Nibh Malesuada, Ac Malesuada Leo Volutpat.
        </p>
      </div>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p className="quote-icon">“</p>
          <p className="testimonial-text">
            It proved to be exactly the kind of home we wanted. We wish to express our thanks
            for your hard work in finding us a temporary home, which proved to be exactly what
            we wanted.
          </p>
          <div className="testimonial-user">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
            <div>
              <h4>Jaydon Aminoff</h4>
              <p>Buyer</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="quote-icon">“</p>
          <p className="testimonial-text">
            It proved to be exactly the kind of home we wanted. We wish to express our thanks
            for your hard work in finding us a temporary home, which proved to be exactly what
            we wanted.
          </p>
          <div className="testimonial-user">
            <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="user2" />
            <div>
              <h4>Affrals Sizzan</h4>
              <p>Seller</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="quote-icon">“</p>
          <p className="testimonial-text">
            It proved to be exactly the kind of home we wanted. We wish to express our thanks
            for your hard work in finding us a temporary home, which proved to be exactly what
            we wanted.
          </p>
          <div className="testimonial-user">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="user3" />
            <div>
              <h4>Makenna Korla</h4>
              <p>Agent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
