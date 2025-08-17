import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/accom.jpg'; // Ensure the image path is correct

const Accommodation = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>ACCOMMODATION</h3>
          <p style={{ textAlign: 'justify' }}>
            A number of guesthouses in Bonga and various other locations in Kafa provide pleasant places to sleep. The Kafa Development Association (KDA) Guesthouse is run by an NGO of the same name and is located on the hillside above Bonga town. This guesthouse has comfortable cottages including showers, toilets, kitchen, and breakfast. It has great views over the rural landscape and can also arrange guides for the area.
          </p>
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>Rooms & Prices:</h5>
          <p style={{ textAlign: 'justify' }}>
            Double room (Double bed or two single beds, own bathroom) for Ethiopian guests: 450 ETB/night
          </p>
          <p style={{ textAlign: 'justify' }}>
            Double room (Double bed or two single beds, own bathroom) for international guests: 600 ETB/night
          </p>
          <p style={{ textAlign: 'justify' }}>
            Single room (Double bed or single bed, own bathroom) for Ethiopian guests: 300 ETB/night
          </p>
          <p style={{ textAlign: 'justify' }}>
            Single room (Double bed or single bed, own bathroom) for international guests: 450 ETB/night
          </p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Accommodation in Kafa" className="img-fluid rounded shadow" />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold', textAlign: 'center' }}>Other Accommodation in Bonga Town:</h5>
          <p style={{ textAlign: 'justify' }}>
            <strong>The Coffee Land Hotel</strong> is a newly established, privately owned hotel. The hotel has 30 rooms, most with a private bathroom. Coffee Land is located in the centre of Bonga town. Contact Mim: (+251) 0912709064 or (+251) 0473310010
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>Green View Hotel.</strong> Contact Tewodros Zewudu: (+251) 0932475377
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>Makira Hotel</strong>. Contact Zemechaw Abadu: (+251) 939312415
          </p>
          <p style={{ textAlign: 'justify' }}>
            <strong>The Dani Hotel</strong> has 8 rooms with private bath and 4 rooms with shared facilities. It is located on the main road from Jimma to Bonga town across from the secondary high school.
          </p>
          <p style={{ textAlign: 'justify' }}>
           <strong>The Wushwush Guesthouse</strong>is located off the main road from Bonga just past the village of Wushwush. It provides guestrooms or camping places as well as a kitchen.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Accommodation;
