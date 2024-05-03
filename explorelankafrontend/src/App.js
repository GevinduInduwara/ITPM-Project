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
          </Routes>
       </Router>
    </div>
  );
}

export default App;
