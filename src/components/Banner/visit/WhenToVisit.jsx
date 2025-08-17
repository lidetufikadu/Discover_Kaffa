import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/harvesting.jpg'; // Make sure to place the image correctly

const WhenToVisit = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      <h3 className="text-center mb-4" style={{ color: '#007bff', fontWeight: 'bold' }}>WHEN TO VISIT</h3>

      <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
        With a temperate climate, Kafa is a great tourist destination all year-round. However, a visit is more advisable during the dry season from October to April. The <strong>coffee harvest</strong> in late October marks the beginning of the dry season and is a perfect time to explore the Kafa Biosphere Reserve.
      </p>

      {/* Coffee Harvest Section */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>COFFEE HARVEST</h5>
          <p style={{ textAlign: 'justify' }}>
            The coffee harvest, which takes place at the end of October and into November, is a very active time in the Kafa Biosphere Reserve. All of the farmers are preparing, collecting, and drying the celebrated wild coffee. This is an excellent time to learn about the process and see how it is done first-hand.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Climate Section */}
      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>CLIMATE</h5>
          <p style={{ textAlign: 'justify' }}>
            The rainy season lasts from mid-June until the end of September when 40% of the rainfall in the Biosphere Reserve occurs. Light rains also fall in March and April but sunshine still emerges behind the rain clouds. The average temperature remains 20 degrees Celsius throughout the year, though temperatures can range between 12 and 30 degrees Celsius. Late September presents an optimal time to visit after the rains have turned the forest into a lush green.
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>FESTIVALS</h5>
          <p style={{ textAlign: 'justify' }}>
          Two of the most colourful festivals in Ethiopia are Timkat on January 19 and Meskal on September 27. Two other Christian holidays with large celebrations include Christmas on January 7, and New Year celebrations on September 11. Eid-al-Fitr, the Muslim festival at the end of Ramadan normally falls in September or October and the Festival of Sacrifice occurs 70 days after that. The dates for these holidays in Ethiopia differ because of Ethiopia's special calendar. However, all dates listed here are in Gregorian calendar. 
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default WhenToVisit;
