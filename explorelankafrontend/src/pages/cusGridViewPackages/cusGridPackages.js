import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FixedNav from '../../Components/fixednavbar/FixedNav';
import './cusGridPackages.css';

function Gridpackages() {
  const [packages, setpackages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function getpackages() {
      axios.get(`http://localhost:4000/api/package/`)
        .then((res) => {
          setpackages(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getpackages();
  }, []);

  // Function to format date without time portion
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="full-page-container">
      <FixedNav />
      <div className="container">
        <div className="all-packages-container">
          <h1>Package Overview</h1>
          <div className="row">
            <div className="col-md-6 offset-md-3 mb-3">
              <input
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Enter Name"
                className="form-control"
              />
             {/* <button className="cusGridvewbutton" id="AsearchBtn" type="submit">Search</button> */}
            </div>
          </div>
          </div>
          </div>
          <div className="container">
      <div className="all-forms-container">
        <div className="row">
          {packages
            .filter((pkg) => {
              return search.trim() === '' ? pkg : pkg.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((pkg) => (
              <div className="col-md-6 mb-3" key={pkg._id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">{pkg.name}</h3>
                    <img src={pkg.imageUrl} alt={pkg.name} className="card-img" />
                    <p className="card-text">
                      <strong>Members:</strong> {pkg.members}
                    </p>
                    <p className="card-text">
                      <strong>Accommodation:</strong> {pkg.accomodation}
                    </p>
                    <p className="card-text">
                    {Array.isArray(pkg.meal) && pkg.meal.length > 0 && (
                      <div>
                        <strong>Meal:</strong>
                        <ul>
                          {pkg.meal.map((meal, index) => (
                            <li key={index}>{meal}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    </p>
                    <p className="card-text">
                      <strong>Transport:</strong> {pkg.transport}
                    </p>
                    <div className="col-md-12 text-center mr-5">
                      <a href="/budgetshow"><button type="button" className="btn btn-success btn-lg">Purchase</button></a>
                      </div> 
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Gridpackages;