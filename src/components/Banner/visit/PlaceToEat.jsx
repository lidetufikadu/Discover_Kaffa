import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/place.jpg'; // Make sure to place the image correctly

const PlaceToEat = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>PLACES TO EAT</h3>
          <p style={{ textAlign: 'justify' }}>
          Many restaurants and eateries serve traditional Ethiopian food in Bonga town. The infrastructure in Kafa is growing, so more restaurants are constantly popping up around the region. Most of the higher standard restaurants can be found in the region’s hotels. Dani Hotel serves national food dishes. The owner of the Coffee Land Hotel serves both national Ethiopian and western food. At the Kafa Development Association (KDA) Guesthouse, visitors can request a meal for lunch or dinner with a reasonable charge. However, you might be responsible for supplying the ingredients yourself from the market in town.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
        <p style={{ textAlign: 'justify' }}>
        Many opportunities to cook for oneself also exist. The KDA Guesthouse, as well as some other guesthouses, provides self-catering kitchens in their facilities. Fresh food for cooking is available at the local market and the shops around town. Special arrangements for a particular type of food can easily be made or you can arrange a cook for one meal, a trek, or your entire holiday upon request at your hotel or guesthouse. </p>
      </div>

     
    </div>
  );
};

export default PlaceToEat;
