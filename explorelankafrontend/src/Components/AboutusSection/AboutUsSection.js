import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsSection.css';
import { FaInfoCircle } from 'react-icons/fa';

function AboutUsSection() {
  return (
    <div className="about-us-section">
      <h2>About Us</h2>
      <p>ExploreLanka is your one-stop web application for planning the perfect Sri Lankan adventure. We are passionate about showcasing the beauty and diversity of Sri Lanka, and our user-friendly tour planning tools empower you to craft a unique itinerary that aligns with your interests and travel style. Founded in 2024, ExploreLanka is a rapidly growing platform designed to simplify the trip planning process for local and international visitors alike.</p>
      <Link to='/Aboutus' className="about-us-button">
        <FaInfoCircle className="icon" />
        Learn More
      </Link>
    </div>
  );
}

export default AboutUsSection;