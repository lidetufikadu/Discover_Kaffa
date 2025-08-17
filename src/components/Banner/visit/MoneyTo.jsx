import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coffeeHarvest from '../../../assets/images/birr.jpg'; // Make sure to place the image correctly

const MoneyTo = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', marginTop: '40px' }}>
      

 
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 style={{ color: '#007bff', fontWeight: 'bold' }}>MONEY</h3>
          <p style={{ textAlign: 'justify' }}>
          The local currency is <strong>Ethiopian Birr.</strong> Cash is the best option in Ethiopia. It is possible to exchange cash and travellers cheques in bigger cities. US Dollars are by far the easiest to change. However, Euros are becoming more often accepted. It is highly recommended to change money only in official banks, not on the black market, and before you travel from Addis Ababa to the Kafa Zone. Be sure to plan accordingly for your entire trip as exchange services vary greatly outside the capital.
          ATMs do not accept all foreign cards in Ethiopia and credit card advances can be costly. The Ethiopian Airlines office accepts credit cards as well as a few hotels in Addis Ababa. However, credit cards are not widely accepted and regular electricity shortages affect this payment method. Thus, cash is needed for all of the local delicacies and treasures you will find at the local markets. Even though there are currently two ATMs in Bonga, it is recommended to bring along sufficient cash as the machines might be out of service or affected by power cuts. Foreign currencies, such as Euro and Dollars, can also be exchanged at banks in Bonga.</p>
        </div>
        <div className="col-md-6">
          <img src={coffeeHarvest} alt="Coffee Harvest" className="img-fluid rounded shadow" />
        </div>
      </div>

      
    </div>
  );
};

export default MoneyTo;
