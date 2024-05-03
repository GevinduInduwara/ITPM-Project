import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AllPayment.css";
import { Link } from "react-router-dom";
import SideNavBar from "../../components/sidenavbar/sideNavBar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function AllPayments() {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const componentRef = useRef();

  useEffect(() => {
    function getPayments() {
      axios
        .get(`http://localhost:8000/api/payment/`)
        .then((res) => {
          setPayments(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPayments();
  }, []);

  function handleDelete(id) {
    const deleteUrl = `http://localhost:8000/api/payment/delete/${id}`;
    axios
      .delete(deleteUrl)
      .then((res) => {
        alert("Successfully deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function generatePDF() {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("payment_report.pdf");
    });
  }

  return (
    <div className="allpayments">
      <SideNavBar />
      <div className="allpaymentscontainer">
        <h1>All Client Payment Records</h1>
        <br />
        <div className="row">
          <div className="searchbox">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="fa fa-search"
            />
             <button type="button" className="btnpaymentadd" onClick={generatePDF}>
          Generate PDF Report
        </button>
          </div>
          <br />
          <br />
        </div>
        <br />
        <div className="allpaymentsCard" ref={componentRef}>
          <table className="paymenttable">
            <tr>
              <th scope="col">Payment Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Payment Type</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
            {payments
              .filter((payment) => {
                return search.toLowerCase() === ""
                  ? payment
                  : payment.name.toLowerCase().includes(search);
              })
              .map((payment) => (
                <tr key={payment._id}>
                  <td>{payment.name}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.payment}</td>
                  <td>
                    <Link
                      to="/updatepayment"
                      state={{
                        _id: payment._id,
                        name: payment.name,
                        amount: payment.amount,
                        payment: payment.payment,
                      }}
                    >
                      <button type="button" className="btnpaymentupdate">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(payment._id);
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
        <br />
       
        <br />
        <a href="/addpayment">
          <button type="button" className="btnpaymentadd">
            Add Payment
          </button>
        </a>
      </div>
    </div>
  );
}

export default AllPayments;
