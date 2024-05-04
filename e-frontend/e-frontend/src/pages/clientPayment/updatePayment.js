import React, { useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './updatePayment.css'
import SideNavBar from "../../components/sidenavbar/sideNavBar";

export default function Updatepayment(props) {
  
    const location = useLocation();

    const [id] = useState(location.state._id);
    const [name,setname] =useState(location.state.name);
    const [email,setemail] =useState(location.state.email);
    const [phone,setphone] =useState(location.state.phone);


    const putUrl = `http://localhost:8000/api/payment/update/${id}`;

    const navigate = useNavigate();

    const data = {

      name,
      email,
      phone,

    }
      

    function handleSubmit(e){
        e.preventDefault();
        
        axios.put(putUrl, data).then(() => {
            alert("Item Successfully updated");
        }).catch((err) => {
            alert(err);
            console.log("error");
        })

        navigate("/");
    }


  return (
    <div className='paymentupdate'>
      <SideNavBar/>
      
    <div class="paymentupdatebg">

    <div class="addpaymentupdateheader">
    
    <h1>Update payment</h1>

    
    <div className="paymentupdatecontainer">
    
    
    <form class="selectpaymentupdateform">
      
    
        {/* <div class="form-group">
          <b><label for="id">ID</label></b><br></br>
          <input value={id} type="text" readOnly/>
        </div> */}
    
    
        <div class="form-group">
         <b> <label for="name">Name</label></b><br></br>
         <input onChange={(e)=> {setname(e.target.value)}} value={name} type="text" required/>
        </div>
    
    
        <div class="form-group">
         <b> <label for="amount">Amount</label></b><br></br>
         <input onChange={(e)=> {setemail(e.target.value)}} value={email} type="text" required/>
        </div>
    
    
        <div class="form-group">
         <b> <label for="payment">Payment</label></b><br></br>
         <input onChange={(e)=> {setphone(e.target.value)}} value={phone} type="text" required/>
        </div>
    
       
    <div class="addpaymentupdatebutton">
    
    <button onClick={handleSubmit} className='hall_submit_btn' type='submit'>Update</button>
    
    </div> 
    
      
    
    </form>
    
    </div>
    
    </div>
    
    </div>

    </div>
  )
}

