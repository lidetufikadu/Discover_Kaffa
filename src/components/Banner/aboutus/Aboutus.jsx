import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImage from '../../../assets/images/Kafalogo.jpg';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const AboutUs = () => {
  const headerStyle = {
    background: 'linear-gradient(to right, rgb(200, 230, 248), rgb(36, 67, 240))',
    color: 'white',
    textAlign: 'center',
    marginTop: '40px',
    padding: '10px 0',
    borderRadius: '8px'
  };

  const paragraphStyle = {
    color: '#495057',
    textAlign: 'justify',
    lineHeight: '1.8',
    fontSize: '1rem',
    marginBottom: '20px'
  };

  const listStyle = {
    paddingLeft: '20px',
    marginTop: '20px',
    color: '#333'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
    float: 'right',
    marginLeft: '20px',
    marginBottom: '20px'
  };

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        marginTop: '40px',
        padding: '20px'
      }}
    >
      <main>
        {/* ABOUT SECTION */}
        <section id="about" className="mb-5">
          <h2 style={headerStyle}>
            Discover the Beauty and Culture of Kaffa
          </h2>
          <img src={HeaderImage} alt="Kaffa Logo" style={imageStyle} />
          <p style={paragraphStyle}>
            Kaffa is a region located in southwestern Ethiopia, known for its breathtaking landscapes, 
            rich cultural heritage, and warm hospitality.
            With its lush green forests, rolling hills, and diverse ethnic groups, Kaffa offers a unique 
            and immersive experience for travelers seeking to explore the hidden gems of Ethiopia.
            From vibrant traditional festivals to the tranquil beauty of the Bonga Forest, Kaffa has something
            special for every adventurer.
          </p>
          <p style={paragraphStyle}>
            Join us on a journey to discover the wonders of Kaffa and create memories that will last a lifetime.
          </p>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section id="highlights" style={{ marginTop: '40px' }}>
          <h2 style={headerStyle}>Highlights of Kaffa</h2>
          <ul style={listStyle} className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success"></i> Explore the ancient coffee forests of Kaffa, the birthplace of coffee.
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success"></i> Immerse yourself in the rich cultural traditions of local ethnic groups.
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success"></i> Discover diverse flora and fauna in the Bonga Forest.
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success"></i> Indulge in the delicious and unique cuisine of Kaffa.
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-success"></i> Experience the warmth and hospitality of the local communities.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
