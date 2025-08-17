import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/treval.jpg'; // Make sure to place the image correctly

const TravelPreparations = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>TRAVEL PREPARATIONS</h3>
          <p style={{ textAlign: 'justify' }}>
          Good preparations are needed when planning your trip to Kafa. However, undertaking the 
          preparations for an adventurous Ethiopian holiday stimulates the excitement which you will 
          encounter there. Some things not to forget when planning any trip abroad include health and 
          safety, money, visa issues, and the basics on what to pack.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

      
    </div>
  );
};

export default TravelPreparations;
