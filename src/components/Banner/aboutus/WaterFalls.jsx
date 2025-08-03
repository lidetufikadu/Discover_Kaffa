import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BartaImage from '../../../assets/images/barta.jpg';
import AdiyoImage from '../../../assets/images/adiyo.jpg';
import EllelloImage from '../../../assets/images/ellello.jpg';
import InoImage from '../../../assets/images/ino.jpg';

const WaterfallSection = () => {
  const titleStyle = {
    color: '#007bff',
    fontWeight: 'bold'
  };

  const paragraphStyle = {
    textAlign: 'justify',
    lineHeight: '1.7',
    fontSize: '1rem',
    color: ''
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '450px',
    height: '280px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      <h4 className="text-center mb-4" style={titleStyle}>WATER FALL</h4>

      {/* Barta Waterfall */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={titleStyle}>Barta Waterfall</h5>
          <p style={paragraphStyle}>
            Barta Waterfall is a beautiful natural attraction located in the Kefa region of Ethiopia.
            It cascades down a rocky cliff into a pool below, surrounded by lush greenery.
          </p>
          <p style={paragraphStyle}>
            Barta waterfall is 5 km away from Bonga in Gimbo district Malligawa kebele. It is one of the
            greatest waterfalls in Kaffa, measuring 20 meters wide and about 50 meters high.
            The refraction of light in the spray creates magnificent rainbows, adding to its charm.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={BartaImage} alt="Barta Waterfall" style={imageStyle} />
        </div>
      </div>

      {/* Addiyo Waterfall */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={titleStyle}>Addiyo Waterfall</h5>
          <p style={paragraphStyle}>
            Addiyo Waterfall is found in Addiyo district, 50 km away from Bonga and 12 km from Kaka town.
            The waterfall is sourced from the Addiyo River and cascades in three steps, each around 20 meters high.
          </p>
          <p style={paragraphStyle}>
            The surrounding area is rich in biodiversity, including various bird species, large mammals,
            and a vast bamboo forest. It is a perfect destination for nature lovers.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={AdiyoImage} alt="Addiyo Waterfall" style={imageStyle} />
        </div>
      </div>

      {/* Ellello Waterfall */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={titleStyle}>Ellello Waterfall</h5>
          <p style={paragraphStyle}>
            Ellello Waterfall is found in Gesha district, Andiracha kebele, 135 km from Bonga and 35 km from Dakka town.
            It spans about 30 meters wide and falls 25 meters high.
          </p>
          <p style={paragraphStyle}>
            This stunning waterfall is nestled within a natural forest rich in bird life. Underneath the waterfall,
            a cave hall can accommodate over 500 people, serving as a shelter in ancient times.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={EllelloImage} alt="Ellello Waterfall" style={imageStyle} />
        </div>
      </div>

      {/* Shinaati Iinoo / Shinati Mineral Water */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={titleStyle}>Shinaati Iinoo / Shinati Mineral Water</h5>
          <p style={paragraphStyle}>
            Shinaati Iinoo, or Shinati Mineral Water, is located in Tello district, 5 km from Oda town and 53 km from Bonga.
            This natural mineral water is rich in different minerals and is traditionally used by locals.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={InoImage} alt="Shinaati Iinoo / Shinati Mineral Water" style={imageStyle} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-5 rounded">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default WaterfallSection;
