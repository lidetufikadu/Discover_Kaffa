import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bridgeImg from "../../assets/images/BRIDGE.JPG";
import forestImg from "../../assets/images/forest.jpg";

const NaturalBridgesAndForest = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 className="text-center mb-5 text-primary">Natural Bridges and Forest</h1>
      
      <nav className="mb-4">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-primary" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="attractions.html">Attractions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>

      <ol className="breadcrumb justify-content-center mb-4">
        <li className="breadcrumb-item"><a href="coffe.html">ABOUT COFFEE</a></li>
        <li className="breadcrumb-item"><a href="waterfall.html">WATER FALL AND WILD LIFE</a></li>
        <li className="breadcrumb-item"><a href="ANCIENT.html">ANCIENT SPIRITUAL PLACES</a></li>
        <li className="breadcrumb-item"><a href="haritage.html">BACK</a></li>
      </ol>

      <h2 className="text-secondary">Natural Bridge</h2>
      <p>
        Several natural bridges have developed in Kafa, which form above ground when water and wind erode rocks. 
        Rock arches are interesting sites as many are walled by towering cliffs. Besides their own beauty, these natural bridges 
        offer excellent panoramic views of the surrounding area. One natural bridge is located at Guguto and is locally named Gurgutto, 
        which means God’s Bridge.
      </p>
      <img src={bridgeImg} alt="Natural Bridge" className="img-fluid mb-4 rounded" />

      <h2 className="text-secondary">About Forest</h2>
      <p>
        The forests in Kefa Zone, Ethiopia are known for their rich biodiversity and unique ecosystems. These forests are home to 
        a variety of plant and animal species, some of which are endemic to the region. The forests also play a crucial role in 
        regulating the local climate, providing clean air and water, and supporting the livelihoods of local communities.
      </p>
      <p>
        Unfortunately, these forests are facing threats from deforestation, illegal logging, and agricultural expansion. Conservation 
        efforts are being made to protect and restore these valuable ecosystems.
      </p>
      <img src={forestImg} alt="Forest" className="img-fluid mb-4 rounded" />

      <footer className="text-white text-center py-3 mt-5" style={{ backgroundColor: '#6c757d' }}>
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">
          Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a>
        </p>
      </footer>
    </div>
  );
};

export default natural;
