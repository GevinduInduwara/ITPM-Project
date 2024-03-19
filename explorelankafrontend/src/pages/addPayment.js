//fetching the add payment page
import { useEffect, useState } from "react";



const addPayment = () => {
    const [payment, setPayment] = useState({
        paymentId: '',
        paymentType: '',
        paymentAmount: '',
        paymentDate: ''
    });
    useEffect(() => {

        const fetchpayments = async () => {
            const response = await fetch('http://localhost:4000/api-client/payment');
            const json = await response.json();

            if (response.ok) {
                console.log(json);
            } else {
                console.log('error');
            }

    }

    return (
        <div>
            <center>
            <h1>Add payment page</h1>
            <p>Here you can add payment details</p>
            </center>
            
        </div>
    )
}

export default addPayment;