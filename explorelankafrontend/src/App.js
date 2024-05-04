import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/UserLogin';
import Signup from './Components/UserSignup';
import UserDetails from './Components/UserDetails';
import UserProfile from './pages/UserProfile';
import UsersTable from './pages/UsersTable';
import ShowOneDayTour from './pages/oneDayTour/oneDayTourShow'
import BudgetShow from './pages/oneDayTour/budgetShow'
import CalculatePackage from './pages/oneDayTour/calculatePackage'
import MapContainer from './pages/oneDayTour/oneDayTour'
import PackageGridView from './pages/cusGridViewPackages/cusGridPackages'
import Home from '../src/pages/Homepage/Home';
import Addoffer from './pages/adminAddPackages/Addoffer';
import AllOffer from './pages/adminAllPackages/AllOffers';
import UpdateOffer from './pages/adminPackageUpdate/UpdateOffer';
import Aboutus from './pages/AboutusPage/Aboutus';
import Grid from './pages/ClientGridView/ClientGridView';

function App() {
  return(
    <div className='App'>
       <Router>
          <Routes>
            <Route path='/signup' element ={<Signup />} />
            <Route path='/' element ={<Login />} />
            <Route path='/userprofile/:id' element ={<UserProfile />} />
            <Route path='/userdetails' element ={<UsersTable />} />
            <Route path='/onedaytour' element={<MapContainer/>}/>
            <Route path='/showonedaytour' element={<ShowOneDayTour/>}/>
            <Route path='/budgetShow' element={<BudgetShow/>}/>
            <Route path='/calculatePackage' element={<CalculatePackage/>}/>
            <Route path='/packagegridview' element={<PackageGridView/>}/>

          <Route path='/Home' element={<Home />} />
          <Route path='/viewoffer' element={<AllOffer />} />
          <Route path='/add' element={<Addoffer />} />
          <Route path='/UpdateOffer' element={<UpdateOffer />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Grid' element={<Grid />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;


