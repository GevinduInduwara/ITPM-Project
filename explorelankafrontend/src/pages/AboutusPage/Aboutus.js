// AboutUs.js

import React from 'react';
import './Aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import FixedNav from '../../Components/Header/Header';

function AboutUs() {
  return (
    <div className="about-us-container">
      <FixedNav />
      <h2>About Us</h2>
      <p>Welcome to our company. We strive to...</p>
      <p>ExploreLanka is your one-stop web application for planning the perfect Sri Lankan adventure. We are passionate about showcasing the beauty and diversity of Sri Lanka, and our user-friendly tour planning tools empower you to craft a unique itinerary that aligns with your interests and travel style. Founded in [Year], ExploreLanka is a rapidly growing platform designed to simplify the trip planning process for local and international visitors alike.</p>
      <div className="vision-mission-container">
        <h3>Vision</h3>
        <p>Our vision is to become the leading platform for discovering and experiencing the wonders of Sri Lanka, connecting travelers with authentic cultural experiences and breathtaking natural landscapes.</p>
        <h3>Mission</h3>
        <p>Our mission is to provide innovative and personalized travel solutions that enable individuals to explore Sri Lanka with ease, fostering unforgettable memories and meaningful connections with the local communities.</p>
      </div>
    </div>
  );
}

export default AboutUs;
