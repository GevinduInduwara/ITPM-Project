import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateOffer.css'; // Your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS file
import FixedNavbar from '../../Components/Header/Header';

export default function UpdateOffer() {
    const location = useLocation();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state._id);
    const [offerTitle, setOfferTitle] = useState(location.state.offerTitle);
    const [previousPrice, setPreviousPrice] = useState(location.state.previousPrice);
    const [discountPrice, setDiscountPrice] = useState(location.state.discountPrice);
    const [offerDescription, setOfferDescription] = useState(location.state.offerDescription);
    const [startDate, setStartDate] = useState(location.state.startDate);
    const [endDate, setEndDate] = useState(location.state.endDate);

    const putUrl = `http://localhost:4000/api/offer/update/${id}`;

    const data = {
        offerTitle,
        previousPrice,
        discountPrice,
        offerDescription,
        startDate,
        endDate
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.put(putUrl, data).then(() => {
            alert("Offer Successfully updated");
        }).catch((err) => {
            alert(err);
            console.log("error");
        })

        navigate("/viewoffer");
    }

    return (
        <div className='offerupdate'>
            <FixedNavbar />

            <div className="offerupdatebg">

                <div className="addofferupdateheader">

                    <h1>Update Offer</h1>

                    <div className="offerupdatecontainer">

                        <form className="selectofferupdateform">

                            <div className="form-group">
                                <b><label htmlFor="offerTitle">Offer Title</label></b><br></br>
                                <input onChange={(e) => { setOfferTitle(e.target.value) }} value={offerTitle} type="text" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <b><label htmlFor="previousPrice">Previous Price</label></b><br></br>
                                <input onChange={(e) => { setPreviousPrice(e.target.value) }} value={previousPrice} type="number" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <b><label htmlFor="discountPrice">Discount Price</label></b><br></br>
                                <input onChange={(e) => { setDiscountPrice(e.target.value) }} value={discountPrice} type="number" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <b><label htmlFor="offerDescription">Offer Description</label></b><br></br>
                                <input onChange={(e) => { setOfferDescription(e.target.value) }} value={offerDescription} type="text" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <b><label htmlFor="startDate">Start Date</label></b><br></br>
                                <input onChange={(e) => { setStartDate(e.target.value) }} value={startDate} type="date" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <b><label htmlFor="endDate">End Date</label></b><br></br>
                                <input onChange={(e) => { setEndDate(e.target.value) }} value={endDate} type="date" className="form-control" required />
                            </div>

                            <div className="addofferupdatebutton">
                                <button onClick={handleSubmit} className='hall_submit_btn btn btn-primary' type='submit'>Update</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}
