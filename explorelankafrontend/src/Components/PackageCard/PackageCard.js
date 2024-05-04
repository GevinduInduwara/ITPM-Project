import React from 'react';
import './PackageCard.css';

function PackageCard({ title, description, price }) {
  return (
    <div className="package-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button className="purchase-button">Purchase</button>
    </div>
  );
}

export default PackageCard;
