import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/kor.jpg'; // Ensure the image path is correct

const Healthcare = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>

      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h4 style={{ color: '#007bff', fontWeight: 'bold' }}>HEALTH CARE</h4>
          <p style={{ textAlign: 'justify' }}>
            Facilities in Kafa provide only basic medical services. However, there is a hospital and a drug store in Bonga which provide fundamental care. An American clinic, Chiri Health Center, is located 24 kilometres south of Bonga in the Decha woreda and, if the situation arises, would be the best option for primary medical care. While major health problems are rare, possibilities exist for them to occur while travelling. Proper precautions should be taken. It is advisable to obtain travel insurance which includes medical emergencies and evacuation. Hospitals in Addis Ababa can provide adequate care. It is also possible to contact your embassy if serious care is needed.
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <h4 style={{ color: '#007bff', fontWeight: 'bold' }}>VACCINATIONS</h4>
          <p style={{ textAlign: 'justify' }}>
            Vaccinations are an easy and assured way to protect yourself from diseases which are vaccine-preventable. Please consult your doctor to determine which vaccines you need or are important for your personal health. A Yellow Fever vaccination certificate is required to enter Ethiopia if you are travelling from a place where this disease occurs. Malaria is present in Ethiopia in areas below 2,500 meters, except Addis Ababa. Thus, it is important to take all proper precautions to prevent Malaria including obtaining an anti-malarial prescription, wearing insect repellent, long pants and sleeves, and sleeping with a mosquito net in malaria-inflicted regions. Kafa has not generally been affected by Malaria but climate change has seen some cases of malaria in the Highlands. Discuss further with your doctor regarding the current situation and what will be appropriate for you and your trip itinerary. Other recommended vaccinations include Hepatitis A and B, Polio, Meningococcal, Typhoid, and ensuring that routine vaccinations are up to date.
          </p>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <h4 style={{ color: '#007bff', fontWeight: 'bold' }}>PERSONAL FIRST AID</h4>
          <p style={{ textAlign: 'justify' }}>
            It is always a good idea when travelling, especially in remote areas, to bring a basic First Aid kit that contains items for light injuries and for aches and pains, including pain reliever, antibiotics, and antidiarrhea. This can prevent emergency trips or discomfort during your trip resulting from minor problems.
          </p>
        </div>
      </div>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default Healthcare;
