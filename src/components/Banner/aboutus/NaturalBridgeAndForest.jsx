import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BridgeImage from '../../../assets/images/bridge.jpg';
import ForestImage from '../../../assets/images/forest.jpg'; // Make sure to place the image correctly

const NaturalBridgeAndForest = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
<h4 className="text-center mb-3" style={{ color: '#007bff', fontWeight: 'bold' }}>Natural Bridge And Forest</h4>
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>GURGUTO NATURAL BRIDGE (God's bridge)</h5>
          <p style={{ textAlign: 'justify' }}> Gurguto natural bridge/God's Bridge is found in Decha woreda Gedam kebele. It is 2k/m from main highway to Tello 
          and 10 k/m from Bonga.This bridge has pathway on its top and covered by natural vegetation. Gicha 
          River is passing through the natural bridge.It has beautiful inner natural design wall.It is eye-catching 
          naturally designed inner wall. It has also good looking for nature lovers to enjoy dense forest surrounded 
          the natural bridge
          </p>
        </div>
        <div className="col-md-6">
          <img src={BridgeImage} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

     
      <div className="row my-5">
        <div className="col-md-12">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>YOFIRA NATURAL BRIDGE</h5>
          <p style={{ textAlign: 'justify' }}>Yofira natural bridge is found in Easter part of Bonga town (01) kebele in Dada village. This bridge is 
          well developed to visit and destination site is nearby to Barta waterfall, Open air museum, beautiful natural
          forest, to watch variety of birds and wild animals (like Columbus Monkey, derivate Monkey, Common Baboon).
          This bridge carries small vehicles. The length of the bridge is 13 meter long, 3 meters high and its width is 3 meters. 
          It is good opportunity for visitors to observe indigenous trees grown on the top of this bridge.
          </p>

        </div>
      </div>

      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>NATURAL FOREST</h5>
          <p style={{ textAlign: 'justify' }}> 
            The forests in Kefa Zone, Ethiopia are known for their rich biodiversity and unique ecosystems. These forests are home to a variety of plant and animal species, some of which are endemic to the region. The forests also play a crucial role in regulating the local climate, providing clean air and water, and supporting the livelihoods of local communities.
          </p>

          <p style={{ textAlign: 'justify' }}>
          Unfortunately, these forests are facing threats from deforestation, illegal logging, and agricultural expansion. Conservation efforts are being made to protect and restore these valuable ecosystems.
          </p>
        </div>
        <div className="col-md-6">
          <img src={ForestImage} alt="NATURAL FOREST" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  );
};

export default NaturalBridgeAndForest;
