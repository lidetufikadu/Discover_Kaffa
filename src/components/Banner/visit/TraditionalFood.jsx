import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/injera.jpg';
import coffeeHarvest1 from '../../../assets/images/injeraa.jpg'; // Make sure to place the image correctly

const TraditionalFood = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>

      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>TRADITIONAL FOOD</h3>
          <p style={{ textAlign: 'justify' }}>
          Though it may appear that Ethiopian cuisine is very simple and remains similar throughout the country, it in fact does have a large degree of variety from region to region and contains a complex range of ingredients. Ethiopia’s traditional food encompasses very distinctive flavours. The staple food is called Injera, which is similar to a big pancake. Injera is usually made using gluten-free flour called tef. Its partlyfermented dough gives it its typical sourdough taste.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
        <p style={{ textAlign: 'justify' }}>
        Diners sit in a circle on small stools or low, comfy divans. They sit around an hour-glass shaped, colourful wicker basket-like table with a concave top, called a mesob. A woman carries a towel, basin and pitcher of water around to each diner in order that he or she can wash their hands. Once each person has done this, the woman removes the mesob and returns it covered containing the meal. The dishes, which are often a kind of spicy stew made with meat or pulses, called wot, are then placed directly onto the injera. Using only the right hand, diners tear off a piece of the injera and use it to scoop a portion of one of the dishes and eat it. It is polite while dining in Ethiopia to accept everything that is offered to you. You may contentedly pat your belly if you must refuse. To show you are satisfied with your meal leave a little food left on the tray.
        </p>
      </div>
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <p style={{ textAlign: 'justify' }}>
          Ethiopian food mostly consists of spicy stews made using meat or vegetables. Meat in Ethiopia means, most commonly, beef, lamb or goat. Pork is extremely rare as a result of religious dictates. Fish is also rare despite the abundance of rivers and lakes. Dishes with raw meat, such as kitfo with raw minced beef spiced with chili, are also frequently encountered and can be quite tasty. Vegetarians will have no problem in Ethiopia. One can request an animal product-free dish or be lucky enough to be eating on a meatfree fasting day which includes Wednesday, Fridays, and periods throughout the year often before large religious holidays. It is always possible to request milder food if you do not have a spicy palate. Some say Ethiopian food is an acquired taste, it is definitely an experience and we invite you to join. In Kafa, food will not be served in the ritual style of one of Addis Ababa’s restaurants, but the food is always delicious and fresh.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest1} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>
      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default TraditionalFood;
