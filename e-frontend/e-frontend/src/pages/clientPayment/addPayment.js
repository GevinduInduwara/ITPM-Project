import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './addPayment.css';
import FixedNavbar from "../../components/fixednavbar/FixedNav.js";
import Footer from "../../components/footer/footer.js";


function AddPayment(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cardName, setcardName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setcvv] = useState("");
  const [error, setError] = useState(false); 
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (editMode && editId) {
      axios.get(`http://localhost:8000/api/payment/${editId}`)
        .then(response => {
          const data = response.data;
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setcardName(data.cardName);
          setcardNumber(data.cardNumber);
          setExpMonth(data.expMonth);
          setExpYear(data.expYear);
          setcvv(data.cvv);
        })
        .catch(error => {
          console.error("Error fetching payment data:", error);
        });
    }
  }, [editMode, editId]);

  function sendData(e){
    e.preventDefault();

    const newPayment = {
      name,
      email,
      phone,
      cardName,
      cardNumber,
      expMonth,
      expYear,
      cvv
    }

    if (name.length === 0 || email.length === 0 || phone.length === 0 || cardName.length === 0 || cardNumber.length === 0 || expMonth.length === 0 || expYear.length === 0 || cvv.length === 0) {
      setError(true);
    } else {
      if (editMode && editId) {
        axios.put(`http://localhost:8000/api/payment/${editId}`, newPayment)
          .then(() => {
            alert("Payment Updated");
            navigate('/');
          })
          .catch(err => {
            alert(err);
          });
      } else {
        axios.post("http://localhost:8000/api/payment/create", newPayment)
          .then(() => {
            alert("Payment Added");
            navigate('/');
          })
          .catch(err => {
            alert(err);
          });
      }
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPhone("");
    setcardName("");
    setcardNumber("");
    setExpMonth("");
    setExpYear("");
    setcvv("");
    setError(false);
    setEditMode(false);
    setEditId(null);
  }

  return(
    <div className="paymentmain">
      <FixedNavbar/>
     
      <div className="package-details-payment">
        <h1><b>Selected Package Details</b></h1><br></br>
        <h4>Package Name : package 1</h4><br></br>
        <h4>Package Price : Rs : 30,000</h4><br></br>
        <h4>Members : 6 </h4>
        <h4>Days : 10 </h4>
        <h4>Meals : 5</h4>
        <h4>Transport : Yes</h4>

      </div>
      <div className="payment-form">
        <h2><b>Enter your details</b></h2>
        
        <h5>Enter your name</h5>
        <input type="text" className="form-control-payment" id="name" placeholder="Your Name" required="true" value={name} onChange={(e)=> setName(e.target.value)} />
        {/* {error && name.length <= 0 && <label>Name cannot be empty!</label>} */}
        
        <h5>Email</h5>
        <input type="text" className="form-control-payment" id="email" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        {error && email.length <= 0 && <label>Email cannot be empty!</label>}
        
        <h5>Phone Number</h5>
        <input type="tel" className="form-control-payment" id="phone" value={phone} placeholder="Your Phone Number" onChange={(e)=> setPhone(e.target.value)} />
        {error && phone.length <= 0 && <label>Phone Number cannot be empty!</label>}
     
        <h5>Name on Card</h5>
        <input type="text" className="form-control-payment" id="nameCard" value={cardName} onChange={(e)=> setcardName(e.target.value)} placeholder="Your Name"/>
        {error && cardName.length <= 0 && <label>Card Name cannot be empty!</label>}
        
        <h5>Credit/Debit Card Number</h5>
        <input type="text" className="form-control-payment" id="cardNo" value={cardNumber} onChange={(e)=> setcardNumber(e.target.value)} pattern="[0-9]{16}" placeholder="XXXX XXXX XXXX XXXX"/>
        {error && cardNumber.length <= 0 && <label>Card Number cannot be empty!</label>}
        
        <div className="col-md-6 month">
        <h5>Expiry Date</h5>
        <input type="text" className="form-control-payment" id="expMonth" placeholder="MM" maxLength="2" size="2" value={expMonth} onChange={(e) => setExpMonth(e.target.value)} />
        <span></span></div>
        <div className="col-md-6 year">
        <input type="text" className="form-control-payment" id="expYear" placeholder="YY" maxLength="2" size="2" value={expYear} onChange={(e) => setExpYear(e.target.value)} />
        </div>
        <h5>CVV / CVC</h5>
        <input type="password" className="form-control-payment" id="cvv" value={cvv} onChange={(e)=> setcvv(e.target.value)} pattern="[0-9]{3}"  onClick={() => setError(false)} />
        {error && cvv.length <= 0 && <label>CVV cannot be empty!</label>}

        <button onClick={sendData} type="button" className="btn btn-submit-payment">{editMode ? "Update Payment" : "Save Details"}</button>
        
        <button onClick={clearForm} type="button" className="btn btn-submit-payment">Clear Form</button>
      </div>
       <br></br><br></br>
    
      <button onClick={() => navigate('/home')} type="button" className="btn btn-submit-payment"> Checkout</button>
            
      <br></br><br></br>
     <Footer/>
    <br></br><br></br>
   
    </div>
    
  );
}

export default AddPayment;
