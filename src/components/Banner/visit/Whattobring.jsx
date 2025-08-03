import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/bring.jpg'; // Make sure to place the image correctly

const Whattobring = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      <h5 className="text-center mb-4" style={{ color: '#007bff', fontWeight: 'bold' }}>WHAT TO BRING</h5>
      <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>MEDICINES</h5>
      <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
      Be sure to bring a supply of any personal prescriptions for the entire duration of your trip. Over-the-counter anti-diarrheal tablets are highly recommended to relieve discomfort during your trip. Please see the Health Care section for more information on travel-specific medications.
      </p>
      <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>SUN PROTECTION</h5>
          <p style={{ textAlign: 'justify' }}>
          Ethiopia’s exposed Highlands mean it is very important to protect yourself from the sun. Remember to bring sun protection including creams, hats, long pants and shirts, and sunglasses.
          </p>

      <div className="row align-items-center my-5">

        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>CLOTHING</h5>
          <p style={{ textAlign: 'justify' }}>
          Clothing for both warm and cold weather is recommended, especially in mountainous areas it can get quite cold in the evenings. Most Ethiopians wear clothing from head to toe to protect from the sun as well. Ethiopians are not strict when it comes to dress, however it is respectful to wear clothing which is not too revealing. It is not well accepted for men to wear shorts. Comfortable walking shoes are a must, especially when trekking but also for long tours around town and other activities. Rain gear is advisable
          </p>
        </div>

        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

     
      <div className="row my-5">
        <div className="col-md-12">
          <h6 style={{ color: '#007bff', fontWeight: 'bold' }}>ELECTRICAL CONVERTER</h6>
          <p style={{ textAlign: 'justify' }}>
          The voltage in Ethiopian electrical outlets is 220 and they often use the standard European two-pronged socket.    
          </p>
          <h6 style={{ color: '#007bff', fontWeight: 'bold' }}>OTHER USEFUL ITEMS</h6>
          <p style={{ textAlign: 'justify' }}>
          Do not forget your camera to capture the amazing beauty of Kafa. If you plan on doing wildlife and bird viewing, binoculars can enhance the experience.
          </p>
          <h6 style={{ color: '#007bff', fontWeight: 'bold' }}>WATER PURIFICATION</h6>
          <p style={{ textAlign: 'justify' }}>
          Bottled water is available in Kafa. However, if you are trekking and cannot carry your water it is recommended to bring water purification tablets or portable water filters.</p>
        </div>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default Whattobring;
