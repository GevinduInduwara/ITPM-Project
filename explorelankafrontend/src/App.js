import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components

import addPayment from './pages/addPayment';
import navBar from './components/navBar';
import './index.css';

function App() {
  return (
    <div className="App">
      <navBar />
     <BrowserRouter>
        <div className='pages'>         
              <Routes>
                
                <Route path="/" element={<addPayment />} />

              </Routes> 
        </div>
        
     </BrowserRouter>
    </div>
  );
}

export default addPayment;

