import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image2 from '../../../assets/images/both.jpg';

const KaffaKingdoms = () => {
  const kingdoms = [
    "King of Minjo (Minjee Taatoo) 1390-1425 G.C",
    "King of conga (Congee Taatoo) 1425-1460 G.C",
    "King of Adiya (Addiyee Taatoo) 1460-1495 G.C",
    "King of Shada (Shaaddi Taatoo) 1495-1530 G.C",
    "King of Borta (Bortee Taatoo) 1530-1565 G.C",
    "King of Bonga (Boongee Taatoo) 1565-1605 G.C",
    "King Gimba Nechoch (Gimmba Neechoochi) 1605-1640 G.C",
    "King Gali Gafoch (Gallii Gafoochi) 1640-1675 G.C",
    "King Gali Ginecho (Galli Ginecho) 1675-1710 G.C.",
    "Emperor Gaki Gayoch (Gaakki Gayoochi) 1710-1742 G.C",
    "Emperor Gali Gawecho (Gallii Gaaweecho) 1742-1775 G.C",
    "Emperor Shagi Sharecho (Shaggii Sharecho) 1775-1795 G.C",
    "Emperor Beshi Ginecho (Beshi Ginecho) 1795-1798 G.C",
    "Emperor Hoti Gawoch (Hotii Gaawoochi) 1798-1821",
    "Emperor Gahi Nechito (Gahii Neechito) 1821-1845 G.C",
    "Emperor Gawi Nechito (Gawii Neechito) 1845-1854 G.C",
    "Emperor Kaye Sharecho (Kaayee Shaarecho) 1854-1870 G.C",
    "Emperor Gali Sharoch (Galli Sharoochi) 1870-1890 G.C",
    "Emperor Gaki Sharoch (Gaakki Sharoochi) 1890-1897 G.C",
  ];

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', marginTop: '40px' }}>
      <div className="row justify-content-center text-center mb-4">
        <div className="col-lg-8">
          <h2 className="text-primary fw-bold">Crown Of The Kaffa King and King(Taateeno) Gaki Sharoch the last king of Kaffa</h2>
          <img src={Image2} alt="Second" className="img-fluid rounded mb-3 w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          <p className="text-justify px-3" style={{ textAlign: 'justify' }}>
            The ancient Kafa kingdom existed from the 14th century until its conquest by the Ethiopian emperor Menelik II in 1897.
            All of Kafa's kings were worldly as well as spiritual rulers. The kingdom reached its greatest expansion in the 16th century.
            The last king was Gaki Sharoch (Gaakki Sharoochi). Wealth was based on trade in coffee, gold, and musk. Though all buildings
            from that time have been destroyed, visitors can take a look at the former ramparts and historical artifacts at the National
            Coffee Museum in Bonga.
          </p>
        </div>
      </div>

      <h1 className="text-center mb-5 text-primary fw-bold">The 19 Kingdoms of Kaffa</h1>
      <div className="row g-4 justify-content-center">
        {kingdoms.map((kingdom, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center p-3 shadow-sm border-0" 
              style={{ background: '#fff', borderRadius: '12px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h5 className="mb-0 text-dark fw-semibold">{index + 1}. {kingdom}</h5>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default KaffaKingdoms;
