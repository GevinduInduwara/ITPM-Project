import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import './App.css';
import './pages/clientPayment/addPayment.css'; 
import './pages/adminPaymentView/AllPayment.css';
import './pages/clientPayment/updatePayment.css';



import AddPayment from './pages/clientPayment/addPayment'
import AllPayments from './pages/adminPaymentView/AllPayment';
import UpdatePayment from './pages/clientPayment/updatePayment';



import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Admin Dashboard/AdminDashboard';


export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
             <Route path='/' element={<AllPayments/>}/>
            <Route path='/AddPayment' element={<AddPayment/>}/>
            <Route path='/ex' element={<ex/>}/>
            <Route path='/AllPayments' element={<AllPayments/>}/>
            <Route path='/updatePayment' element={<UpdatePayment/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            
        </Routes>
      </Router>
    </div>
  );
}
