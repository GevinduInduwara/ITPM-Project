import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingDetailsCard.css';
import FixedNav from "../../Components/fixednavbar/FixedNav";
import Footer from "../../Components/footer/footer";

const BookingDetailsCard = () => {
  const [eachAmount, setEachAmount] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/getBudget')
      .then((res) => {
        setEachAmount(res.data.eachAmount);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <FixedNav />
      <div className="Bookcontainer">
        <div className="Bookcard">
          <div className="BookcardHeader">
            <h2>Your Booking Details</h2>
          </div>
          <div className="BookcardBody">
            {eachAmount.map((item, index) => (
              <div className="Bookitem" key={index}>
                {Object.keys(item).map((key) => (
                  <div className="Bookrow" key={key}>
                    <span className="Booklabel">{key}:</span>
                    <span className="Bookamount">{item[key]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="BookcardFooter">
            <button className="BookpurchaseBtn">Purchase</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingDetailsCard;