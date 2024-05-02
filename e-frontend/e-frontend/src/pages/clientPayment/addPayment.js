import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './addPayment.css';
import FixedNavbar from "../../components/fixednavbar/FixedNav.js";
import Footer from "../../components/footer/footer.js";

export default function AddPayment(){

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newPayment = {
      name,
      amount,
      payment
    }

    if(name.length === 0 || amount.length === 0 || payment.length === 0){
      setError(true)
    } else {
      axios.post("http://localhost:8000/api/payment/create", newPayment)
        .then(()=>{
          alert("Payment Added")
          navigate('/')
        })
        .catch((err)=>{
          alert(err)
        })
    }
  }

  return(
    

    <div className="paymentmain">
    <FixedNavbar/>
    <br></br>
        <div className="payment-form">
          <h5>Hello User !</h5>
          <h5>Enter your name</h5>
          <input type="text" className="form-control" id="name" placeholder="Enter Name" 
            onChange={(e)=> {
              setName(e.target.value);
            }}
          />
          {error && name.length <= 0 ? <label>Name cannot be empty!</label> : ""}
          <h5>Amount</h5>
          <input type="text" className="form-control" id="amount" placeholder="Enter Amount"
            onChange={(e)=> {
              setAmount(e.target.value);
            }}
          />
          {error && amount.length <= 0 ? <label>Amount cannot be empty!</label> : ""}
          <h5>Payment Type</h5>
          <input type="text" className="form-control" id="date"
            onChange={(e)=> {
              setPayment(e.target.value);
            }}
          />
          {error && payment.length <= 0 ? <label>Type cannot be empty!</label> : ""}
          <button onClick={sendData} type="button" className="btn btn-submit">Add Payment</button>
        </div>
        <div className="toatl">
          <h1>Adddddddddddddd</h1>
          <h1>Adddddddddddddd</h1>
          <h1>Adddddddddddddd</h1>
          <h1>Adddddddddddddd</h1>
          <h1>Adddddddddddddd</h1>
          <h1>Adddddddddddddd</h1>
          <h1>Adddddddddddddd</h1>
          
        </div>
    
      <br></br><br></br>
      <Footer/>
     </div> 
  )
}   