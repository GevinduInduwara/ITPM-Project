import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './AllOffers.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FixedNavbar from '../../Components/Header/Header';

function AllOffers() {
  const [offers, setOffers] = useState([]);
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Get access to navigate function

  useEffect(() => {
    function getOffers() {
      axios.get(`http://localhost:4000/api/offer/`).then((res) => {
        setOffers(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }

    getOffers();
  }, [])

  useEffect(() => {
    if (id) {
      axios.delete(`http://localhost:4000/api/offer/delete/${id}`).then(() => {
        alert("Offer Deleted");
        navigate('/View'); // Navigate to /View page
      }).catch((err) => {
        alert(err.message);
      })
    }
  }, [id, navigate]) // Add navigate to dependency array

  // Function to format date without time portion
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className='alloffers'>
      <FixedNavbar />
      <div className="allofferscontainer">
        <h1>All Offers</h1>
        <div className="row">
          <div className="allofferssearch">
            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder='Enter Name' className="search" />
          </div>
        </div>
        <div className="alloffersCard">
          {
            offers.filter((offer) => {
              return search.toLowerCase() === '' ? offer : offer.offerTitle.toLowerCase().includes(search)
            }).map((offer) =>
              <div className="offercard" key={offer._id}>
                <h3>{offer.offerTitle}</h3>
                <p><strong>Previous Price:</strong> {offer.previousPrice}</p>
                <p><strong>Discount Price:</strong> {offer.discountPrice}</p>
                <p><strong>Offer Description:</strong> {offer.offerDescription}</p>
                <p><strong>Start Date:</strong> {formatDate(offer.startDate)}</p>
                <p><strong>End Date:</strong> {formatDate(offer.endDate)}</p>
                <div>
                  <Link to="/updateoffer" state={{ _id: offer._id, offerTitle: offer.offerTitle, previousPrice: offer.previousPrice, discountPrice: offer.discountPrice, offerDescription: offer.offerDescription, startDate: offer.startDate, endDate: offer.endDate }} ><button type="button" className="btn btn-primary">Update</button></Link>
                  <button type="button" className="btn btn-danger" onClick={() => { setId(offer._id) }}>Delete</button>
                </div>
              </div>
            )
          }
        </div>
        <a href='/add'><button type="button" className="btn btn-primary">Add Offer</button></a>
      </div>
    </div>
  )
}

export default AllOffers;
