import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllPayment.css";
import { Link } from "react-router-dom";
import SideNavBar from "../../components/sidenavbar/sideNavBar";

function AllPayments() {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <div className="allpayments">
      <SideNavBar />
      <div className="allpaymentscontainer">
        <h1>All Client Payment Records</h1>
        <br></br>

        {/* <a className="btn btn-primary" href="./adminPaymentView/paymentReport" >
            <i className="far fa-info-alt"></i>&nbsp;Get Report
            </a> */}


        <div className="row">
          <div className="searchbox">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Name"
              className="fa fa-search"
            />
          </div>
        </div>
        <br></br>
        <div className="allpaymentsCard">
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
                    <Link to="/">
                      <button
                        onClick={() => {
                          handleDelete(payment._id);
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </table>
        </div>
        <br></br>
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
