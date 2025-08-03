import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sliderImg3 from "../../assets/images/a1.png";
import sliderImg4 from "../../assets/images/a2.png";
import sliderImg5 from "../../assets/images/a4.png";
import sliderImg6 from "../../assets/images/a5.png";
import sliderImg7 from "../../assets/images/a6.png";
import sliderImg8 from "../../assets/images/a7.png";

const SecondTourHome = () => {
  const tourImages = [
    {
      src: sliderImg3,
      title: 'Bonga Forest',
      description: 'Discover the lush greenery and diverse wildlife of the Bonga Forest Take a guided hike through the trails and immerse yourself in nature.',
    },
    {
      src: sliderImg4,
      title: 'Coffee Plantations',
      description: 'Visit the coffee plantations of Kefa, the birthplace of coffee. Learn about the traditional coffee-making process and savor the rich flavors of Ethiopian coffee.',
    },
    {
      src: sliderImg7,
      title: 'Bonga University',
      description: 'Bonga University is one of the Public Higher Education institutions in Ethiopia',
    },
    {
      src: sliderImg5,
      title: 'Traditional Villages',
      description: 'Experience the vibrant culture and traditions of the local ethnic groups by visiting traditional villages. Engage with the communities and learn about their way of life',
    },
    {
      src: sliderImg6,
      title: 'Coffee Museum',
      description: 'This museum will be used as a centre for research on Coffea arabica and a guide for the visitors through the world of coffee production.',
    },
    {
        src: sliderImg8,
        title: 'Coffee Ceremony',
        description: 'She roasts coffee beans over a brazier as incense burns, and guests inhale the aromatic smoke.',
      },
  ];

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 className="text-center mb-5 text-primary">Explore the Attractions of Kaffa</h1>
      <div className="row">
        {tourImages.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0" style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <img
                src={image.src}
                alt={image.title}
                className="card-img-top rounded"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ color: '#2c3e50', fontWeight: 'bold', fontSize: '1.2rem' }}>{image.title}</h5>
                <p className="card-text text-center text-muted">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
       <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>

      <style jsx>{`
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        body {
          background-color:rgb(248, 250, 248);
        }
      `}</style>
    </div>
  );
};

export default SecondTourHome;
