import React from 'react';
import './Header.css';

export default function App() {
  return (
    <header>
      <div className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}>
  
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to ExploreLanka</h1>
              <input type="text" placeholder="Enter package name..." className="form-control custom-search" />
              {/* Add a button for searching */}
            </div>
          </div>
        </div>
    </header>
  );
}
