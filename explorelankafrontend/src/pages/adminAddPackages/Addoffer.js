import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import FixedNavbar from '../../Components/Header/Header'

export default function AddOffer() {
  const [offerTitle, setOfferTitle] = useState("");
  const [previousPrice, setPreviousPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [offerDescription, setOfferDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    if (
      offerTitle.trim() === "" ||
      previousPrice.trim() === "" ||
      discountPrice.trim() === "" ||
      offerDescription.trim() === "" ||
      startDate.trim() === "" ||
      endDate.trim() === ""
    ) {
      setError("All fields are required.");
      return false;
    }

    if (isNaN(previousPrice) || isNaN(discountPrice)) {
      setError("Price fields must be numbers.");
      return false;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setError("Start date cannot be after end date.");
      return false;
    }

    setError("");
    return true;
  }

  function sendData(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newOffer = {
      offerTitle,
      previousPrice,
      discountPrice,
      offerDescription,
      startDate,
      endDate
    };

    axios
      .post("http://localhost:4000/api/offer/create", newOffer)
      .then(() => {
        alert("Offer Added");
        navigate("/viewoffer"); // Navigate to the "/view" page
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="offermain">
      <FixedNavbar />

      <div className="offerbg">
        <div className="addofferheader">
          <h1>Add Offer</h1>

          <div className="offercontainer">
            <form className="selectofferform needs-validation" noValidate>
              <div className="form-group">
                <label htmlFor="offerTitle">Offer Title</label>
                <input
                  type="text"
                  id="offerTitle"
                  className={`form-control ${error && offerTitle.trim() === "" ? 'is-invalid' : ''}`}
                  placeholder="Enter Offer Title"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Offer Title cannot be empty!</div>
              </div>

              <div className="form-group">
                <label htmlFor="previousPrice">Previous Price</label>
                <input
                  type="number"
                  id="previousPrice"
                  className={`form-control ${error && previousPrice.trim() === "" ? 'is-invalid' : ''}`}
                  placeholder="Enter Previous Price"
                  value={previousPrice}
                  onChange={(e) => setPreviousPrice(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Previous Price cannot be empty!</div>
              </div>

              <div className="form-group">
                <label htmlFor="discountPrice">Discount Price</label>
                <input
                  type="number"
                  id="discountPrice"
                  className={`form-control ${error && discountPrice.trim() === "" ? 'is-invalid' : ''}`}
                  placeholder="Enter Discount Price"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Discount Price cannot be empty!</div>
              </div>

              <div className="form-group">
                <label htmlFor="offerDescription">Offer Description</label>
                <input
                  type="text"
                  id="offerDescription"
                  className={`form-control ${error && offerDescription.trim() === "" ? 'is-invalid' : ''}`}
                  placeholder="Enter Offer Description"
                  value={offerDescription}
                  onChange={(e) => setOfferDescription(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Offer Description cannot be empty!</div>
              </div>

              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  className={`form-control ${error && startDate.trim() === "" ? 'is-invalid' : ''}`}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
                <div className="invalid-feedback">Start Date cannot be empty!</div>
              </div>

              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  className={`form-control ${error && endDate.trim() === "" ? 'is-invalid' : ''}`}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
                <div className="invalid-feedback">End Date cannot be empty!</div>
              </div>

              <div className="addofferbutton">
                <button onClick={sendData} type="button" className="btn btn-primary">
                  Add Offer
                </button>
                <Link to="/view" className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
