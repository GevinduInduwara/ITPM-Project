import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import FixedNav from "../../Components/fixednavbar/FixedNav";
import Footer from "../../Components/footer/footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./oneDayTour.css";

class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pickup: '',
      first: '',
      second: '',
      third: ''
    };
  }

  componentDidMount() {
    // Initialize autocomplete after component mounts
    const pickupAutoComplete = new this.props.google.maps.places.Autocomplete(
      document.getElementById("pickuplocation")
    );
    const firstAutocomplete = new this.props.google.maps.places.Autocomplete(
      document.getElementById("firstdrop")
    );
    const secondAutocomplete = new this.props.google.maps.places.Autocomplete(
      document.getElementById("secdrop")
    );
    const thirdAutocomplete = new this.props.google.maps.places.Autocomplete(
      document.getElementById("thirddrop")
    );

    pickupAutoComplete.addListener("place_changed", () => {
      this.handlePlaceChange(pickupAutoComplete, "pickup");
    });
    firstAutocomplete.addListener("place_changed", () => {
      this.handlePlaceChange(firstAutocomplete, "first");
    });
    secondAutocomplete.addListener("place_changed", () => {
      this.handlePlaceChange(secondAutocomplete, "second");
    });
    thirdAutocomplete.addListener("place_changed", () => {
      this.handlePlaceChange(thirdAutocomplete, "third");
    });
  }

  handlePlaceChange = (autoComplete, field) => {
    const place = autoComplete.getPlace();
    if (place && place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const formattedAddress = place.formatted_address;
      this.setState({ [field]: { lat, lng, formattedAddress } });
    }
  };
  
  handleSubmit = async (event) => {
    event.preventDefault();
  
    // const navigate = useNavigate();
    const { pickup, first, second, third } = this.state;

try {
    let dataToSend = { pickup, first };
    
    if (second && typeof second === 'object') {
      dataToSend = { ...dataToSend, second };
  }
  
  if (third && typeof third === 'object') {
      dataToSend = { ...dataToSend, third };
  }

    await axios.post('http://localhost:4000/api/saveLocation', dataToSend);
    window.location.reload();
    console.log('Form submitted:', dataToSend);
} catch (error) {
    console.error('Error sending locations to backend:', error);
}
  };

  render() {
    return (
      <div className="packagebg">
        <FixedNav />
        <div className="daytourheader">Best Route</div>
        <div className="row content-main">
          <div className="col-md-5">
            <div className="search-box">

            <form className="form-horizontal" method="post" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-1">
                                <input id="pickuplocation" name="pickup" type="text" placeholder="Pickup Location" className="form-control" autoComplete="off"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-1">
                                <input id="firstdrop" name="first" type="text" placeholder="First Destination" className="form-control" autoComplete="off"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-1">
                                <input id="secdrop" name="second" type="text" placeholder="Second Destination" className="form-control" autoComplete="off"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-md-10 col-md-offset-1">
                                <input id="thirddrop" name="third" type="text" placeholder="Third Destination" className="form-control" autoComplete="off"/>
                            </div>
                        </div>

                        <div className="form-group">
                        <div className="col-md-12 text-center mr-5">
                          <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                             <span style={{ marginLeft: '10px' }}></span>
                             <a href="/showonedaytour"><button type="button" className="btn btn-success btn-lg">View</button></a>
                          </div>
                        </div>
                    </fieldset>
                </form>
            </div>
          </div>
          <div className="col-md-4">
          <script src="https://maps.googleapis.com/maps/api/js?key=apiKey&libraries=places"></script>
          <Map
              className="set-width-map"
              google={this.props.google}
              zoom={10}
              initialCenter={{
                lat: 6.84758,
                lng: 79.92688,
              }}
            />
          </div>
        </div>
        <Footer/>
      </div>  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBvdWTRDRIKWd11ClIGYQrSfc883IEkRiw",
})(MapContainer);
