import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components

import viewAllPayment from './pages/viewAllPayment';
import navBar from './components/navBar';
import './index.css';

function App() {
  return (
    <div className="App">
      <navBar />
     <BrowserRouter>
        <div className='pages'>         
              <Routes>
                
                <Route path="/" element={<viewAllPayment />} />

              </Routes> 
        </div>
        
     </BrowserRouter>
    </div>
  );
}

export default viewAllPayment;

