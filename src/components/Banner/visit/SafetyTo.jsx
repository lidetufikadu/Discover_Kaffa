import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/safety.png'; // Make sure to place the image correctly

const SafetyTo = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>SAFETY</h3>
          <p style={{ textAlign: 'justify' }}>
          Violent crime is rare in Ethiopia. However, it is important to remain alert and cautious while travelling. Petty theft is possible in larger cities. Travellers may be targeted by beggars and it is personal discretion whether or not to give something. Most Ethiopians discourage giving money because it causes negative impacts on local communities. It is additionally recommended not to give anything to children. 
          </p>
          <p style={{ textAlign: 'justify' }}>
          While Ethiopia is generally safe for tourists, certain regions face security risks due to civil unrest, violence, and armed conflict, so exercise caution and be aware of your surroundings. </p>
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

export default SafetyTo;
