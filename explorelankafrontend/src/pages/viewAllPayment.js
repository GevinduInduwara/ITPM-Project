//fetching the add payment page
//import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect} from "react";

const AddPayment = () => {
    const [payment, setPayments] = useState(null);
    
    useEffect(() => {
        const fetchPayments = async () => {
            const response = await fetch('http://localhost:4000/api-client/payment/');
            const json = await response.json();

            if (response.ok) {
                setPayments(json);
            } 
        }
        fetchPayments();
    },[])

    return (
        <div className='allpayments'>
            <div className='payments'>
                {payment &&payment.map((payment) => (
                    <div className='payment' key={payment._id}>
                        <h2>{payment.clientName}</h2>
                        <p>{payment.clientEmail}</p>
                        <p>{payment.paymentDate}</p>
                    </div>
                ))

                }

            </div>
            <center>
            <h1>Add payment page</h1>
            <p>Here you can add payment details</p>
            </center>   
        </div>
    )
}

export default AddPayment;