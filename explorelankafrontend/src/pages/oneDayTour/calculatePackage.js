import {useState} from "react";
import axios from "axios";
import "./oneDayTour.css";
import { useNavigate} from "react-router-dom";
import FixedNav from "../../Components/fixednavbar/FixedNav";
import Footer from "../../Components/footer/footer";

export default function AddPackage(){

  const [members,setmembers] =useState("");
  const [accomodation,setaccomodation] =useState("");
  const [meal,setMealOptions] =useState("");
  const [transport,settransport] =useState("");
  const [error,seterror] =useState("");
 
  
  const navigate = useNavigate();

  function sendData(e){

        e.preventDefault();
        
        const newPackage = { members, accomodation, meal, transport }

    if(members.length===0||accomodation.length===0||meal.length===0||transport.length===0){  
          seterror(true)
    }else{ 
     axios.post("http://localhost:4000/api/package/create",newPackage).then(()=>{
     console.log('package added');
     }).catch((err)=>{
      alert(err)
     })
     navigate('/')  
  }}

return(
<div class="packagemain">
  <div class="addpackagebg">
  <FixedNav />

    <div class="addpackageheader">
      <div class="packagecontainer">
        <form class="selectpackageform">
          <h2>Other Details</h2>

          <div class="form-group-members">
            <b><h5>Members</h5></b>
            <input type="text" class="form-control" id="members" placeholder="Enter Members" onChange={(e)=> { setmembers(e.target.value) }}/>
            {error && members.length <= 0 ? <label>Members Name cannot be empty!</label> : ""}
          </div>

          <div class="form-group-accomodation">
            <b><h5>Accommodation</h5></b>
            <select type="text" class="selectAcco" id="accommodation" onChange={(e) => { setaccomodation(e.target.value) }}>
              <option value="" selected disabled>Select Accommodation</option>
              <option value="2-star">2-star</option>
              <option value="3-star">3-star</option>
              <option value="4-star">4-star</option>
              <option value="5-star">5-star</option>
            </select>
            {error && accomodation.length <= 0 ? <label>Accommodation cannot be empty!</label> : ""}
          </div>

          <div class="form-group-meal">
        <b><h5>Meal</h5></b>
         <div>
          <label for="breakfast">
            <input type="checkbox" id="breakfast" name="mealOption" value="breakfast" onChange={(e) => {
                if (e.target.checked) {
                    setMealOptions(prevOptions => [...prevOptions, e.target.value]);
                } else {
                    setMealOptions(prevOptions => prevOptions.filter(option => option !== e.target.value));
                }
            }} />
            Breakfast
          </label>
         </div>
        <div>
          <label for="lunch">
            <input type="checkbox" id="lunch" name="mealOption" value="lunch" onChange={(e) => {
                if (e.target.checked) {
                    setMealOptions(prevOptions => [...prevOptions, e.target.value]);
                } else {
                    setMealOptions(prevOptions => prevOptions.filter(option => option !== e.target.value));
                }
            }} />
            Lunch
          </label>
        </div>
        <div>
        <label for="dinner">
            <input type="checkbox" id="dinner" name="mealOption" value="dinner" onChange={(e) => {
                if (e.target.checked) {
                    setMealOptions(prevOptions => [...prevOptions, e.target.value]);
                } else {
                    setMealOptions(prevOptions => prevOptions.filter(option => option !== e.target.value));
                }
            }} />
            Dinner
         </label>
        </div>
       </div>
         {error&&meal.length<=0?
        <label>Meal cannot be empty!</label>:""}

          <div class="form-group-transport">
            <b><h5>Transport</h5></b>
            <input type="text" class="form-control" id="transport" placeholder="Enter Transport" onChange={(e)=> { settransport(e.target.value) }}/>
            {error && transport.length <= 0 ? <label>Transport cannot be empty!</label> : ""}
          </div>
          <div style={{ marginLeft: '40%', marginTop:'5%' }}>
          <a href="/showonedaytour"><button type="button" onClick={sendData} className="btn btn-success btn-lg">View</button></a>
          </div>
          </form>
      </div>
    </div>
    <Footer/>
  </div>
</div>


  )}