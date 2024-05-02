// import React, { useState, useEffect } from 'react';
// import jsPDF from 'jspdf';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import 'jspdf-autotable';


// export default function paymentReport() {
//   const [payments, setPayments] = useState([]);
//   const [search, setSearch] = useState("");
  
//   //const [users, setUsers] = UseState([]);

//   useEffect(() => {
//     function getPayments() {
//       axios
//         .get(`http://localhost:8000/api/payment/`)
//         .then((res) => {
//           setPayments(res.data);
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     }
//     getPayments();
//   }, []);

//   function handlePdfGeneration() {
//     const doc = new jsPDF();

//     // Set company name
//     const companyName = 'Explore Lanka';

//     // Set table header
//     const header = [["name", "amount", "payment"]];

//     // Add data rows
//     const data = payments.map(user => [user.name, user.amount, user.payment]);

//     // Add table to document
//     doc.autoTable({ head: header, body: data });

//     // Add company name and date/time to PDF
//     doc.text(companyName, 10, 10);

//     // Download the PDF document
//     doc.save('payment_report.pdf');
//   }

//   return (
//     <center>
//       <br></br>
//       <h1>Payment Report</h1>
//      <br></br>
      
//       <div className='box'>
//         {Array.isArray(payments) && payments.length > 0 ? (
//           <table className="table-striped" id="my-table" border={1} cellPadding={20}>
//             <thead>
//               <tr>
//                 <th><b>Name</b></th>
//                 <th><b>Amount</b></th>
//                 <th><b>Payment</b></th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {payments.map((user, index) => (
//                 <tr key={index}>
//                   <td>{payments.name}</td>
//                   <td>{payments.payment}</td>
//                   <td>{payments.amount}</td>
              
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No users found.</p>
//         )}

//         <br></br>
        
//         <button type='button' onClick={handlePdfGeneration} className="btn btn-primary">
//           Generate PDF
//         </button>
//         <br></br><br></br>

//         <a className="btn btn-dark" href="/AllPayment" style={{background: 'linear-gradient(0deg, rgba(50,245,0,0.6503851540616247) 0%, rgba(0,130,5,1) 75%);'}}>
//                                         <i className="far fa-info-alt"></i>&nbsp;Back
//                                     </a>
//       </div>
//     </center>
//   );
// }

// // export default paymentReport;

