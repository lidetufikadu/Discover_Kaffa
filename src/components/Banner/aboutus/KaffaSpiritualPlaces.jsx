import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import andiracha from '../../../assets/images/andiracha.jpg';
import kuti from '../../../assets/images/kuti.jpg';
import tongola from '../../../assets/images/tongola.jpg';
import shaka from '../../../assets/images/shaka.jpg';

const AncientSpiritualPlaces = () => {
  const places = [
    {
      title: "Andracha St. Medihanealem Church",
      image: andiracha,
      description: `Ras W/Giyorgis, leader of the Amhara invaders, destroyed the palace of the Kaffa kingdom after the defeat of the last Emperor of Kaffa Gaki Sharochi (Cinito Gallito) and replaced it with the Andracha Medihanealem Church. Built in 1898 by Ras W/Giyorgis, this church's architectural design is very attractive, with ancient holy books and items inside. Nearby attractions include God's Bridge, Tongola Mosque, and the Coffee Mother Tree. It is located 10 km from Bonga.`,
    },
    {
      title: "Kuti St. Michael Church",
      image: kuti,
      description: `Located in Decha district, Kuti kebele, this church was built in 1529 E.C. It is 32 km from Bonga and 9 km from Awrada town. The church is a popular attraction, known for its ancient holy books and items.`,
    },
    {
      title: "Tongola Mosque",
      image: tongola,
      description: `Tongola Mosque is found in Decha district, Gedam kebele, 10 km from Bonga. Founded by Abdulselam Bin Hiji Suleman from Mecca during the reign of Emperor Gawe Sherochi in the 17th century, it is the first mosque in Kaffa. The mosque contains ancient items like the holy Quran and has preserved its traditions over centuries.`,
    },
    {
      title: "Shaakka Cultural/Traditional Village",
      image: shaka,
      description: `This village is known as Ibedechino Goroo that means the center of Ibedechino. It is ancient traditional and cultural village in kaffa, and which serves spiritual serves for people so many hundred years ago. Ibedechino or Ibedagoda is a man who has a spirit of Doche. Doche is ancient spirit which is nominated on aman Ibedagoda and has believed by most of Kaffecho people and non-kaffecho peoples neighboring in kaffa. The recent Ibedagoda is named Ibedagoda Abera Amamo. The elders say he was 16th. Many people were participating on yearly ceremonies on shaakka at center of Doochi Goroo at mid of Ethiopian Easters/ shaashee kayo/. It is 42 k/m far from Bonga.`,
    },
  ];

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      <h3 className="text-center mb-5" style={{ color: '#007bff', fontWeight: 'bold' }}>Ancient Spiritual Places in Kaffa</h3>

      {places.map((place, index) => (
        <div key={index} className="row align-items-center mb-5">
          <div className="col-md-5">
            <img src={place.image} alt={place.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-7">
            <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>{place.title}</h3>
            <p style={{ textAlign: 'justify' }}>{place.description}</p>
          </div>
        </div>
      ))}

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default AncientSpiritualPlaces;
