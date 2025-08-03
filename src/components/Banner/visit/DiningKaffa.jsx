import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/food.jpg'; // Make sure to place the image correctly

const DiningKaffa = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>DINING IN KAFFA</h3>
          <p style={{ textAlign: 'justify' }}>
         <strong>Ethiopian food</strong>  is quite unique in its flavours and preparations. Often spicy, regularly filling, rarely the same experience, distinctive Ethiopian food has a complex range of ingredients and varies in preparation throughout the country. Some say that Ethiopian food is an acquired taste. However, we believe it is an experience and we invite you to join.
          Despite its rurality, Kafa offers various dining options. Apart from the traditional dishes, Western dining options are often available, especially on the traditional fasting days on Wednesday and Fridays, or upon request from an arranged cook. 
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
        <p style={{ textAlign: 'justify' }}>
        Despite its rurality, Kafa offers various dining options. Apart from the traditional dishes, Western dining options are often available, especially on the traditional fasting days on Wednesday and Fridays, or upon request from an arranged cook.</p>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default DiningKaffa;
