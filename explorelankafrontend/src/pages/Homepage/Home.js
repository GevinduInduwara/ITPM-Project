import React from 'react';
import { Link } from 'react-router-dom';
import FixedNavbar from '../../Components/fixednavbar/FixedNav';
import Chatbot from '../../Components/chatbot';
import AboutUsSection from '../../Components/AboutusSection/AboutUsSection';
import PackageCard from '../../Components/PackageCard/PackageCard';
import Footer from '../../Components/footer/footer';
import Header from '../../Components/Header/Header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <div className="home">
      <FixedNavbar />
      <Header />
      <AboutUsSection />            
      <div className="slideshow-container">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_640.jpg" alt="Slide 1" />
            <p className="legend"></p>
          </div>
          <div>
            <img src='https://img.freepik.com/free-photo/beautiful-landscape-image-loch-lomond-scotland-sunrise_1057-35828.jpg?size=626&ext=jpg' alt="Slide 2" />
            <p className="legend"></p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1515961896317-adf9e14bdcc0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA=" alt="Slide 3" />
            <p className="legend"></p>
          </div>
        </Carousel>
      </div>
      <div className="package-cards">
        <PackageCard
          title="Basic Package"
          description="Includes basic features."
          price={19.99}
        />
        <PackageCard
          title="Standard Package"
          description="Includes standard features."
          price={29.99}
        />
        <PackageCard
          title="Premium Package"
          description="Includes premium features."
          price={39.99}
        />
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default Home;
