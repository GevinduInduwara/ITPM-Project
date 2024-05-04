import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import axios from 'axios'; // You might need axios for API requests
import SideNavBar from '../../Components/Sidenavbar/sideNavBar.js';
import './AdminDashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios.get('/api/dashboard')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <SideNavBar/>
      
      <h1><center>Explore Lanka - AdminDashboard</center></h1>
      <br></br><br></br><br></br>
      <div className="dashboard-container">
        {data.map(item => (
          <div key={item.id} className="dashboard-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-tiles">
        <Link to="/page1" className="navigation-tile">
         
          <div className="tile-content"><h1>My Account</h1></div>
        </Link>
        <Link to="/page2" className="navigation-tile" >
          
          <div className="tile-content"><h1>Package Handling</h1></div>
        </Link>
        <Link to="/page1" className="navigation-tile">
          
          <div className="tile-content"><h1>User Handling</h1></div>
        </Link>
        <Link to="/page1" className="navigation-tile">
       
          <div className="tile-content"><h1>Chat Bot Service</h1></div>
        </Link>
        <Link to="/page1" className="navigation-tile">
        
          <div className="tile-content"><h1>Offer Handling</h1></div>
        </Link>
        <Link to="/AllPayment" className="navigation-tile">
         
          <div className="tile-content"><h1>Payment Handling</h1></div>
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;
