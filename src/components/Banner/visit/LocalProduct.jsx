import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/honey.jpg'; // Make sure to place the image correctly

const LocalProduct = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      <h3 className="text-center mb-4" style={{ color: '#007bff', fontWeight: 'bold' }}>LOCAL PRODUCTS</h3>

      <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>
      The Kafa region with its abundant rainfall is ecologically prosperous. The locals take advantage of nature’s bounty not only by collecting the forest coffee but many other useful and delicious products.
      </p>

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>FOREST HONEY</h5>
          <p style={{ textAlign: 'justify' }}>
          Forest Honey is a well-known local product in the Kafa region. Cultivated from wild bees in the highland rainforests, this honey is similarly unique to the forest coffee. Beekeepers in the region climb trees in order to collect this natural honey from the wild bees. Also similar to the forest coffee, there is a growing international market for forest honey and local cooperatives and fair-trade certifications. As the flavour of honey takes on its environment, this rich all-natural honey has a distinctive woody flavour. Ethiopia is the world’s tenth biggest producer of honey and third major producer of beeswax.
        </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>

        <div className="col-md-12">
          <p style={{ textAlign: 'justify' }}>
          Many opportunities to cook for oneself also exist. The KDA Guesthouse, as well as some other guesthouses, provides self-catering kitchens in their facilities. Fresh food for cooking is available at the local market and the shops around town. Special arrangements for a particular type of food can easily be made or you can arrange a cook for one meal, a trek, or your entire holiday upon request at your hotel or guesthouse. </p>
          </div>
      </div>

     
      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>SPICESE</h5>
          <p style={{ textAlign: 'justify' }}>
          Local spices of Kafa include Ethiopian Coriander which is an essential part of the typical Ethiopian berbere spice mixture. The wild Long Pepper, also included in this spice mixture, is hotter than black pepper but with sweet and earthy flavours. The long pepper was once highly prized in Roman times but is now not well-known outside Southeast Asia and Northern Africa. The berbere spice mixture also includes toasted red chillies, ginger, garlic, rue, cardamom, onions, cloves, cinnamon, ajawan, basil, and salt, and resembles an Indian masala. Berbere is used to hotly spice mutton, other meat dishes, or a meat-fasting stew made from lentils, peas and beans.
          </p>
          <p style={{ textAlign: 'justify' }}>
          It can also be mixed with water or wine to form a condiment paste called awaze. Ethiopian Cardamom is popular not only for use as a powder in the berbere and other spice mixtures, but locals also use its pods to flavour their coffee. A spiced clarified butter known as nitr kibe, used more often as a flavouring rather than a cooking medium, is also a common ingredient in Ethiopian cooking.  
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default LocalProduct;
