import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/UserLogin';
import Signup from './Components/UserSignup';
import UserDetails from './Components/UserDetails';
import UserProfile from './pages/UserProfile';
import UsersTable from './pages/UsersTable';

function App() {
  return(
    <div className='App'>
       <Router>
          <Routes>
            <Route path='/signup' element ={<Signup />} />
            <Route path='/' element ={<Login />} />
            <Route path='/userprofile/:id' element ={<UserProfile />} />
            <Route path='/userdetails' element ={<UsersTable />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
