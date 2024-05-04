import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FixedNav from '../../Components/Header/Header';
import './ClientGridView.css';

function AllOffers() {
  const [offers, setOffers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function getOffers() {
      axios.get(`http://localhost:4000/api/offer/`)
        .then((res) => {
          setOffers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getOffers();
  }, []);

  // Function to format date without time portion
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="container">
      <FixedNav/>
      <div className="allofferscontainer">
        <h1>All Offers</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3 mb-3">
            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Enter Name" className="form-control" />
          </div>
        </div>
        <div className="row">
          {offers
            .filter((offer) => {
              return search.toLowerCase() === '' ? offer : offer.offerTitle.toLowerCase().includes(search);
            })
            .map((offer) => (
              <div className="col-md-6 mb-3" key={offer._id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">{offer.offerTitle}</h3>
                    <p className="card-text">
                      <strong>Previous Price:</strong> {offer.previousPrice}
                    </p>
                    <p className="card-text">
                      <strong>Discount Price:</strong> {offer.discountPrice}
                    </p>
                    <p className="card-text">
                      <strong>Offer Description:</strong> {offer.offerDescription}
                    </p>
                    <p className="card-text">
                      <strong>Start Date:</strong> {formatDate(offer.startDate)}
                    </p>
                    <p className="card-text">
                      <strong>End Date:</strong> {formatDate(offer.endDate)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AllOffers;
