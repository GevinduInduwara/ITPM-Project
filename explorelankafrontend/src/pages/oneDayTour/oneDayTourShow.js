import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import { useNavigate} from "react-router-dom";
import FixedNav from "../../Components/fixednavbar/FixedNav";
import Footer from "../../Components/footer/footer";
import "./oneDayTour.css";

const DayTours = ({ google }) => {
  const [sortedDistances, setSortedDistances] = useState([]);
  const [locations, setLocations] = useState([]);
  const [pickupLocation, setPickupLocation] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:4000/api/getLocation')
      .then((res) => {
        setSortedDistances(res.data.sortedDistances);

        const pickup = {
          lat: parseFloat(res.data.sortedDistances[0].plat),
          lng: parseFloat(res.data.sortedDistances[0].plng),
        };

        const otherLocations = res.data.sortedDistances.slice(1).map((item) => ({
          lat: parseFloat(item.flat || item.slat || item.tlat),
          lng: parseFloat(item.flng || item.slng || item.tlng),
        }));

        setPickupLocation(pickup);
        setLocations(otherLocations);
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert(err.response.data.error); 
          navigate('/onedaytour')  
        } else {
          alert('An error occurred while fetching data.');
        }
      });
  }, []);

  const sortedItems = sortedDistances.slice(1).filter(item => item.distance !== 0);

  return (
    <div className="packagebg">
      <FixedNav />
      <div className="daytourheader">Best Route</div>
      <div className="row content-main">
        <div className="col-md-5">
          <div className="sorted-distances-container">
            <h1 className="sorted-distances-title">Sorted Distances</h1>
            <ul className="sorted-distances-list">
              {sortedItems.map((item, index) => {
                const labels = ["1", "2", "3"];
                return (
                  <li key={index}>
                    <span className="location-label">
                      Your {labels[index]} Location:
                    </span>{" "}
                    {item.address ||
                      (item.flat && item.flng
                        ? `${item.flat}, ${item.flng}`
                        : "")}
                  </li>
                );
              })}
            </ul>
            <div className="col-md-12 text-center mr-5">
            <a href="/calculatePackage"><button type="button" className="btn btn-success btn-lg">Purchase</button></a>
             </div>             
          </div>{" "}
        </div>
        <div className="col-md-7">
          <script src="https://maps.googleapis.com/maps/api/js?key=apiKey&libraries=places"></script>
          <Map
  className="set-width-map"
  google={google}
  zoom={10}
  initialCenter={{
    lat: 6.84758,
    lng: 79.92688,
  }}
>
  {pickupLocation && <Marker position={pickupLocation} />}
  {sortedItems.map((item, index) => (
    <Marker
      key={index}
      position={{ lat: parseFloat(item.flat || item.slat || item.tlat), lng: parseFloat(item.flng || item.slng || item.tlng) }}
    />
  ))}
  {pickupLocation && sortedItems.length > 0 && (
    <Polyline
      path={[pickupLocation, ...sortedItems.map(item => ({
        lat: parseFloat(item.flat || item.slat || item.tlat),
        lng: parseFloat(item.flng || item.slng || item.tlng),
      }))]}
      strokeColor="#FF0000"
      strokeOpacity={1}
      strokeWeight={4}
    />
  )}
</Map>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvdWTRDRIKWd11ClIGYQrSfc883IEkRiw',
})(DayTours);


