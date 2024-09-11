import React from 'react';
import './LatestProperties.css'; 
import house4 from '../assets/images/house4.jpg';
import house3 from '../assets/images/house3.jpg';
import house5 from '../assets/images/house5.jpg';
const LatestProperties = () => {
  const properties = [
    {
      id: 1,
      price: "$5,970",
      title: "Tranquil Haven In The Woods",
      address: "103 Wright Court, Burien, WA 98168",
      beds: 4,
      baths: 3,
      label: "Popular",
      labelClass: "label-popular",
     image :house4
    },
    {
      id: 2,
      price: "$1,970",
      title: "Serene Retreat By The Lake",
      address: "1964 Jehovah Drive, VA 22408",
      beds: 3,
      baths: 2,
      label: "Newest",
      labelClass: "label-newest",
      image: house3, 
    },
    {
      id: 3,
      price: "$3,450",
      title: "Charming Cottage In The Meadow",
      address: "1508 Centennial Farm Road, Harlan, 51537",
      beds: 4,
      baths: 4,
      label: "Discounted Price",
      labelClass: "label-discounted",
      image:house5,
    },
  ];

  return (
    <section className="latest-properties">
      <div className="section-header">
        <h2>CHECKOUT OUR NEW</h2>
        <h1>Latest Listed Properties</h1>
        <p>
          Donec Porttitor Euismod Dignissim. Nullam A Lacinia Ipsum, Nec
          Dignissim Purus. Nulla Convallis Ipsum Molestie Nibh Malesuada, Ac
          Malesuada Leo Volutpat.
        </p>
        <button className="view-all-button">View All →</button>
      </div>
      <div className="properties-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              <span className={`property-label ${property.labelClass}`}>
                {property.label}
              </span>
            </div>
            <div className="property-info">
              <h3>{property.price}</h3>
              <h4>{property.title}</h4>
              <p>{property.address}</p>
              <div className="property-meta">
                <span>🛏 {property.beds} Beds</span>
                <span>🛁 {property.baths} Bath</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProperties;
