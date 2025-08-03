import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/local.jpg'; // Make sure to place the image correctly

const LocalTours = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>LOCAL TOURS & GUIDES</h3>
          <p style={{ textAlign: 'justify' }}>
          Guides provide a wealth of information and an in-depth look at the region, its people, its history, and its nature. A local guide knows Kafa well because it is his home and he will be proud to show it to you. It is possible to arrange local guides for any length of time, from a few hours to a multi-day trekking excursion.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default LocalTours;
