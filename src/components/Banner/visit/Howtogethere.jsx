import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/aircraft.jpg'; // Make sure to place the image correctly

const Howtogethere = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      <h3 className="text-center mb-4" style={{ color: '#007bff', fontWeight: 'bold' }}>HOW TO GET HERE</h3>

      <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
      The Kafa region is located 460 kilometres southwest of Ethiopia’s capital Addis Ababa. Bonga town is the capital of Kafa Zone and the largest town in the Biosphere Reserve. A variety of options exist for travelling to the Kafa Biosphere Reserve. However, keep in mind that delays in transportation are possible during the rainy season as runways and roads can flood. On top of that, Ethiopia runs on a more relaxed schedule than it is common in some other countries but this ensures that you will slow down and get a chance to see what Ethiopia and Kafa have to offer.
      </p>

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>TRAVEL TO ETHIOPIA</h5>
          <p style={{ textAlign: 'justify' }}>
          The main airport in Ethiopia is Addis Ababa’s Bole International (ADD), which is the main hub of Ethiopian Airlines, a Star Alliance member. The Bole International Airport has nonstop connections to Asia, Europe, North America and South America. Ethiopian Airlines offers a total of 63 international and 19 domestic destinations. It is also possible to travel to Ethiopia overland, if your journey begins from a neighbouring country. However, because of possibilities of changing border circumstances, we recommend checking the current situation for more information
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

     
      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>TRAVEL TO KAFA BIOSPHERE RESERVE</h5>
          <p style={{ textAlign: 'justify' }}>
          It is possible to travel from Addis Ababa to Bonga overland by private car or by bus, which directly run mostly once in a day, departing from Addis Ababa main bus terminal around 6:00am. Tickets are bought a day ahead of the actual journey from the main bus terminal directly. The bus typically stops twice along the way. The transit time can vary depending on road conditions but it generally takes around eight hours from Addis Ababa to Bonga so that you need to allow one full day for this leg of the journey.
          If you prefer to fly, the nearest airport to the Kafa Biosphere Reserve is in Jimma (JIM), 118 kilometers from Bonga to which it is connected with an all-weather asphalt road. From Jimma there are direct flights to and from Addis Ababa four times per week. After arriving in Jimma, overland travel to Bonga can either be done by public bus, which leaves every 2 hours until 6:00pm and takes around two hours, or by private car with a driver, because there are no car renting options in Jimma
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>TRAVEL WITHIN KAFA BIOSPHERE RESERVE</h5>
          <p style={{ textAlign: 'justify' }}>
          So you’ve made the exciting journey to Bonga! If you drive with your own 4x4 vehicle there is no problem getting around the entire Kafa region. Larger roads are maintained but conditions can still vary, especially in the rainy season. It is recommended to bring along spare tires.
          From Bonga, minibuses also leave travelling to Wushwush and take about 30 minutes. Generally, other local and regional buses run more or less frequently throughout the Biosphere Reserve so that you always find a way of getting around.
          As a result of Bonga’s excellent location within the Biosphere Reserve, walking is the simplest mode of transport. Many sites exist which are within a half day’s walk from Bonga. Kafa’s people are amongst the most polite tribes in Ethiopia and will often join you along the way, especially children. Also horse riding and mules offer a fun and different way to get around Kafa. Whatever suits your needs can most likely be arranged.
          </p>
        </div>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default Howtogethere;
