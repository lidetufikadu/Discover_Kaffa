import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/drink.jpg'; // Make sure to place the image correctly

const TraditionalBeverages = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>TRADITIONAL BEVERAGES</h3>
          <p style={{ textAlign: 'justify' }}>
          Coffee, of course, is widely available in Kafa. You can enjoy fine, natural, fresh-brewed forest coffee almost anywhere. If luck will have it, locals will serve your coffee with an embellished and delightful ceremony. Coffee is normally drunk a few times a day and also at the end of the meal. Tea drinking is slightly less common in Kafa, though black tea from the nearby tea farm in Wushwush is available.</p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <p style={{ textAlign: 'justify' }}>
          Ethiopians drink a traditional sweet wine made with honey called tej. This drink used to be the exclusive privilege of royalty and Bonga in particular is famous for its high-quality variation. Tella is a local beer which Ethiopians often drink with their meals. Watch out for araki, a sometimes fiercely strong grain spirit, which might take your breath away. When sampling these traditional drinks keep in mind that they are all homemade and production standards vary greatly from each other and Western standards. Ethiopian and international wines, as well as international beer can also be found in Kafa. Open drunkenness in Ethiopian society is considered impolite so please remember to drink responsibly.
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <p style={{ textAlign: 'justify' }}>
          Bottled water is widely and cheaply available throughout Kafa and Ethiopia. Be careful not to drink tap or fresh water, including ice cubes, because there is a high risk of water-borne infections. If bottled water is not available, purify water first by boiling it ten minutes before drinking or use a water filter. Remember to take enough water with you while you are hiking or travelling.
          </p>
        </div>
      </div>


     
    </div>
  );
};

export default TraditionalBeverages;
