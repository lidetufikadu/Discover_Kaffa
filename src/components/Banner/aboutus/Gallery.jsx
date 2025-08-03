import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image6 from '../../../assets/images/image6.jpg';
import image7 from '../../../assets/images/image7.jpg';
import image8 from '../../../assets/images/image8.jpg';
import image9 from '../../../assets/images/image9.jpg';
import image10 from '../../../assets/images/image10.jpg';
import image11 from '../../../assets/images/image11.jpg';
import image12 from '../../../assets/images/image12.jpg';
import image13 from '../../../assets/images/image13.jpg';
import image14 from '../../../assets/images/image14.jpg';
import image15 from '../../../assets/images/image15.jpg';
import image16 from '../../../assets/images/image16.jpg';
import image17 from '../../../assets/images/image17.jpg';
import image18 from '../../../assets/images/image18.jpg';
import image19 from '../../../assets/images/image19.jpg';
import image20 from '../../../assets/images/image20.jpg';
import image21 from '../../../assets/images/image21.jpg';
import image22 from '../../../assets/images/image22.jpg';
import image23 from '../../../assets/images/image23.jpg';
import image24 from '../../../assets/images/image24.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, 
  image9, image10, image11, image12, image13, image14, image15, image16, image17,
  image18, image19, image20, image21, image22, image23, image24];

const Gallery = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="text-center mb-4" style={{ color: '#007bff', fontSize: '2rem', fontWeight: 'bold', marginTop: '40px' }}>
        GALLERY
      </h2> 

      {/* Image Grid */}
      <div className="row g-3">
        {images.map((img, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div 
              className="card border-0 shadow-sm"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img 
                src={img} 
                className="card-img-top"
                alt={`Gallery ${index + 1}`}
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease, filter 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.filter = 'brightness(0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default Gallery;
