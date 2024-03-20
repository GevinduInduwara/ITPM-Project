const paymentDetails = ({ payment }) => {
    return (
        <div className='payment'>
            <h2>{payment.clientName}</h2>
            <p>{payment.clientEmail}</p>
            <p>{payment.paymentDate}</p>
        </div>
    )
}

export default paymentDetails;